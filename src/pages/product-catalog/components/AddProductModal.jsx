import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const AddProductModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    variety: '',
    type: '',
    price: '',
    stock: '',
    unit: 'stem',
    season: '',
    availability: 'In Season',
    supplierCost: '',
    description: '',
    image: ''
  });

  const [errors, setErrors] = useState({});

  const flowerTypes = [
    { value: 'Rose', label: 'Rose' },
    { value: 'Tulip', label: 'Tulip' },
    { value: 'Lily', label: 'Lily' },
    { value: 'Carnation', label: 'Carnation' },
    { value: 'Sunflower', label: 'Sunflower' },
    { value: 'Orchid', label: 'Orchid' },
    { value: 'Peony', label: 'Peony' },
    { value: 'Hydrangea', label: 'Hydrangea' }
  ];

  const seasons = [
    { value: 'Spring', label: 'Spring' },
    { value: 'Summer', label: 'Summer' },
    { value: 'Fall', label: 'Fall' },
    { value: 'Winter', label: 'Winter' },
    { value: 'Year-round', label: 'Year-round' }
  ];

  const availabilityOptions = [
    { value: 'In Season', label: 'In Season' },
    { value: 'Limited', label: 'Limited' },
    { value: 'Out of Season', label: 'Out of Season' }
  ];

  const unitOptions = [
    { value: 'stem', label: 'Stem' },
    { value: 'bunch', label: 'Bunch' },
    { value: 'bouquet', label: 'Bouquet' },
    { value: 'arrangement', label: 'Arrangement' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) newErrors.name = 'Product name is required';
    if (!formData?.variety?.trim()) newErrors.variety = 'Variety is required';
    if (!formData?.type) newErrors.type = 'Flower type is required';
    if (!formData?.price || parseFloat(formData?.price) <= 0) newErrors.price = 'Valid price is required';
    if (!formData?.stock || parseInt(formData?.stock) < 0) newErrors.stock = 'Valid stock quantity is required';
    if (!formData?.season) newErrors.season = 'Season is required';
    if (!formData?.supplierCost || parseFloat(formData?.supplierCost) < 0) newErrors.supplierCost = 'Valid supplier cost is required';

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    
    if (!validateForm()) return;

    const newProduct = {
      id: Date.now()?.toString(),
      name: formData?.name?.trim(),
      variety: formData?.variety?.trim(),
      type: formData?.type,
      price: parseFloat(formData?.price),
      stock: parseInt(formData?.stock),
      unit: formData?.unit,
      season: formData?.season,
      availability: formData?.availability,
      supplierCost: parseFloat(formData?.supplierCost),
      description: formData?.description?.trim(),
      image: formData?.image || `https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop&crop=center`,
      imageAlt: `Fresh ${formData?.name} ${formData?.variety} flowers in vibrant colors arranged for display`,
      bulkPricing: [
        { quantity: 50, price: parseFloat(formData?.price) * 0.95 },
        { quantity: 100, price: parseFloat(formData?.price) * 0.90 },
        { quantity: 200, price: parseFloat(formData?.price) * 0.85 }
      ],
      createdAt: new Date()?.toISOString()
    };

    onAdd(newProduct);
    handleReset();
    onClose();
  };

  const handleReset = () => {
    setFormData({
      name: '',
      variety: '',
      type: '',
      price: '',
      stock: '',
      unit: 'stem',
      season: '',
      availability: 'In Season',
      supplierCost: '',
      description: '',
      image: ''
    });
    setErrors({});
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-modal p-4">
      <div className="bg-card border border-border rounded-lg shadow-modal w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <Icon name="Plus" size={24} className="text-primary" />
            <h2 className="text-xl font-heading font-semibold text-foreground">Add New Product</h2>
          </div>
          <Button
            variant="ghost"
            onClick={onClose}
            iconName="X"
            iconSize={20}
            className="px-2"
          />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Basic Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Product Name"
                type="text"
                placeholder="e.g., Premium Red Rose"
                value={formData?.name}
                onChange={(e) => setFormData({ ...formData, name: e?.target?.value })}
                error={errors?.name}
                required
              />

              <Input
                label="Variety"
                type="text"
                placeholder="e.g., Freedom, Explorer"
                value={formData?.variety}
                onChange={(e) => setFormData({ ...formData, variety: e?.target?.value })}
                error={errors?.variety}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                label="Flower Type"
                options={flowerTypes}
                value={formData?.type}
                onChange={(value) => setFormData({ ...formData, type: value })}
                error={errors?.type}
                required
                placeholder="Select flower type"
              />

              <Select
                label="Unit"
                options={unitOptions}
                value={formData?.unit}
                onChange={(value) => setFormData({ ...formData, unit: value })}
                placeholder="Select unit"
              />
            </div>

            <Input
              label="Description"
              type="text"
              placeholder="Brief description of the product"
              value={formData?.description}
              onChange={(e) => setFormData({ ...formData, description: e?.target?.value })}
            />
          </div>

          {/* Pricing & Inventory */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Pricing & Inventory</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                label="Selling Price"
                type="number"
                placeholder="0.00"
                value={formData?.price}
                onChange={(e) => setFormData({ ...formData, price: e?.target?.value })}
                error={errors?.price}
                step="0.01"
                required
              />

              <Input
                label="Supplier Cost"
                type="number"
                placeholder="0.00"
                value={formData?.supplierCost}
                onChange={(e) => setFormData({ ...formData, supplierCost: e?.target?.value })}
                error={errors?.supplierCost}
                step="0.01"
                required
              />

              <Input
                label="Initial Stock"
                type="number"
                placeholder="0"
                value={formData?.stock}
                onChange={(e) => setFormData({ ...formData, stock: e?.target?.value })}
                error={errors?.stock}
                required
              />
            </div>

            {/* Profit Calculation Display */}
            {formData?.price && formData?.supplierCost && (
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-medium text-foreground mb-2">Profit Analysis</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Profit per unit:</span>
                    <span className="ml-2 font-medium text-foreground">
                      ${(parseFloat(formData?.price) - parseFloat(formData?.supplierCost))?.toFixed(2)}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Profit margin:</span>
                    <span className="ml-2 font-medium text-foreground">
                      {(((parseFloat(formData?.price) - parseFloat(formData?.supplierCost)) / parseFloat(formData?.price)) * 100)?.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Seasonal Information */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Seasonal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                label="Season"
                options={seasons}
                value={formData?.season}
                onChange={(value) => setFormData({ ...formData, season: value })}
                error={errors?.season}
                required
                placeholder="Select season"
              />

              <Select
                label="Availability Status"
                options={availabilityOptions}
                value={formData?.availability}
                onChange={(value) => setFormData({ ...formData, availability: value })}
                placeholder="Select availability"
              />
            </div>
          </div>

          {/* Image URL (Optional) */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">Product Image</h3>
            <Input
              label="Image URL (Optional)"
              type="url"
              placeholder="https://example.com/image.jpg"
              value={formData?.image}
              onChange={(e) => setFormData({ ...formData, image: e?.target?.value })}
              description="Leave empty to use default image"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 pt-6 border-t border-border">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="ghost"
              onClick={handleReset}
            >
              Reset
            </Button>
            <Button
              type="submit"
              variant="default"
              iconName="Plus"
              iconPosition="left"
              iconSize={16}
            >
              Add Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
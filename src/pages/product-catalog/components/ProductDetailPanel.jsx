
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ProductDetailPanel = ({ product, onUpdate, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: product?.name || '',
    variety: product?.variety || '',
    price: product?.price || 0,
    stock: product?.stock || 0,
    season: product?.season || '',
    availability: product?.availability || '',
    supplierCost: product?.supplierCost || 0,
    description: product?.description || ''
  });

  if (!product) {
    return (
      <div className="w-full lg:w-96 bg-card border border-border rounded-lg p-6 shadow-card">
        <div className="flex flex-col items-center justify-center h-64 text-center">
          <Icon name="Package" size={48} className="text-muted-foreground mb-4" />
          <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
            Select a Product
          </h3>
          <p className="text-sm text-muted-foreground">
            Choose a product from the catalog to view detailed information and manage settings.
          </p>
        </div>
      </div>
    );
  }

  const handleSave = () => {
    onUpdate(product?.id, editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      name: product?.name,
      variety: product?.variety,
      price: product?.price,
      stock: product?.stock,
      season: product?.season,
      availability: product?.availability,
      supplierCost: product?.supplierCost,
      description: product?.description
    });
    setIsEditing(false);
  };

  const profitMargin = ((editData?.price - editData?.supplierCost) / editData?.price * 100)?.toFixed(1);
  const profitAmount = (editData?.price - editData?.supplierCost)?.toFixed(2);

  return (
    <div className="w-full lg:w-96 bg-card border border-border rounded-lg shadow-card max-h-screen overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-border">
        <h2 className="text-lg font-heading font-semibold text-foreground">Product Details</h2>
        <div className="flex items-center space-x-2">
          {isEditing ? (
            <>
              <Button
                variant="outline"
                onClick={handleCancel}
                iconName="X"
                iconSize={16}
                className="px-3"
              />
              <Button
                variant="default"
                onClick={handleSave}
                iconName="Check"
                iconSize={16}
                className="px-3"
              />
            </>
          ) : (
            <Button
              variant="outline"
              onClick={() => setIsEditing(true)}
              iconName="Edit2"
              iconSize={16}
              className="px-3"
            />
          )}
          <Button
            variant="ghost"
            onClick={onClose}
            iconName="X"
            iconSize={16}
            className="px-2"
          />
        </div>
      </div>
      {/* Product Image */}
      <div className="p-6 border-b border-border">
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={product?.image}
            alt={product?.imageAlt}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-2 right-2">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
              product?.availability === 'In Season' ? 'text-success bg-success/10' :
              product?.availability === 'Limited'? 'text-warning bg-warning/10' : 'text-muted-foreground bg-muted'
            }`}>
              {product?.availability}
            </span>
          </div>
        </div>
      </div>
      {/* Product Information */}
      <div className="p-6 space-y-6">
        {/* Basic Info */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Product Name</label>
            {isEditing ? (
              <Input
                type="text"
                value={editData?.name}
                onChange={(e) => setEditData({ ...editData, name: e?.target?.value })}
                className="w-full"
              />
            ) : (
              <p className="text-lg font-semibold text-foreground">{product?.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Variety</label>
            {isEditing ? (
              <Input
                type="text"
                value={editData?.variety}
                onChange={(e) => setEditData({ ...editData, variety: e?.target?.value })}
                className="w-full"
              />
            ) : (
              <p className="text-sm text-muted-foreground">{product?.variety}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Description</label>
            {isEditing ? (
              <textarea
                value={editData?.description}
                onChange={(e) => setEditData({ ...editData, description: e?.target?.value })}
                className="w-full px-3 py-2 border border-border rounded-md resize-none"
                rows={3}
              />
            ) : (
              <p className="text-sm text-muted-foreground">{product?.description}</p>
            )}
          </div>
        </div>

        {/* Pricing & Stock */}
        <div className="space-y-4 pt-4 border-t border-border">
          <h3 className="font-heading font-semibold text-foreground">Pricing & Inventory</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Price per {product?.unit}</label>
              {isEditing ? (
                <Input
                  type="number"
                  value={editData?.price}
                  onChange={(e) => setEditData({ ...editData, price: parseFloat(e?.target?.value) || 0 })}
                  step="0.01"
                  className="w-full"
                />
              ) : (
                <p className="text-xl font-semibold text-foreground">${product?.price}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Stock Quantity</label>
              {isEditing ? (
                <Input
                  type="number"
                  value={editData?.stock}
                  onChange={(e) => setEditData({ ...editData, stock: parseInt(e?.target?.value) || 0 })}
                  className="w-full"
                />
              ) : (
                <p className="text-xl font-semibold text-foreground">{product?.stock}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Supplier Cost</label>
            {isEditing ? (
              <Input
                type="number"
                value={editData?.supplierCost}
                onChange={(e) => setEditData({ ...editData, supplierCost: parseFloat(e?.target?.value) || 0 })}
                step="0.01"
                className="w-full"
              />
            ) : (
              <p className="text-lg font-semibold text-foreground">${product?.supplierCost}</p>
            )}
          </div>

          {/* Profit Calculation */}
          <div className="bg-muted rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Profit Analysis</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Profit per unit:</span>
                <span className="text-sm font-medium text-foreground">${profitAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Profit margin:</span>
                <span className={`text-sm font-medium ${
                  profitMargin > 30 ? 'text-success' : 
                  profitMargin > 15 ? 'text-warning' : 'text-error'
                }`}>
                  {profitMargin}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Seasonal Information */}
        <div className="space-y-4 pt-4 border-t border-border">
          <h3 className="font-heading font-semibold text-foreground">Seasonal Information</h3>
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Season</label>
            {isEditing ? (
              <Select
                options={[
                  { value: 'Spring', label: 'Spring' },
                  { value: 'Summer', label: 'Summer' },
                  { value: 'Fall', label: 'Fall' },
                  { value: 'Winter', label: 'Winter' },
                  { value: 'Year-round', label: 'Year-round' }
                ]}
                value={editData?.season}
                onChange={(value) => setEditData({ ...editData, season: value })}
              />
            ) : (
              <p className="text-sm text-foreground">{product?.season}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Availability Status</label>
            {isEditing ? (
              <Select
                options={[
                  { value: 'In Season', label: 'In Season' },
                  { value: 'Limited', label: 'Limited' },
                  { value: 'Out of Season', label: 'Out of Season' }
                ]}
                value={editData?.availability}
                onChange={(value) => setEditData({ ...editData, availability: value })}
              />
            ) : (
              <p className="text-sm text-foreground">{product?.availability}</p>
            )}
          </div>
        </div>

        {/* Bulk Pricing Tiers */}
        <div className="space-y-4 pt-4 border-t border-border">
          <h3 className="font-heading font-semibold text-foreground">Bulk Pricing Tiers</h3>
          <div className="space-y-2">
            {product?.bulkPricing?.map((tier, index) => (
              <div key={index} className="flex justify-between items-center py-2 px-3 bg-muted rounded">
                <span className="text-sm text-muted-foreground">{tier?.quantity}+ units</span>
                <span className="text-sm font-medium text-foreground">${tier?.price} each</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4 border-t border-border">
          <Button
            variant="default"
            onClick={() => {/* Handle add to invoice */}}
            iconName="Plus"
            iconPosition="left"
            iconSize={16}
            className="w-full"
          >
            Add to Invoice
          </Button>
          
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              onClick={() => {/* Handle seasonal pricing */}}
              iconName="Calendar"
              iconPosition="left"
              iconSize={16}
              className="w-full"
            >
              Seasonal Pricing
            </Button>
            
            <Button
              variant="outline"
              onClick={() => {/* Handle inventory alert */}}
              iconName="Bell"
              iconPosition="left"
              iconSize={16}
              className="w-full"
            >
              Set Alert
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPanel;
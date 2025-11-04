import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProductCard = ({ product, onSelect, onQuickEdit, isSelected }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editPrice, setEditPrice] = useState(product?.price);

  const getStockStatusColor = (stock) => {
    if (stock <= 10) return 'text-error bg-error/10';
    if (stock <= 50) return 'text-warning bg-warning/10';
    return 'text-success bg-success/10';
  };

  const getAvailabilityColor = (status) => {
    switch (status) {
      case 'In Season': return 'text-success bg-success/10';
      case 'Limited': return 'text-warning bg-warning/10';
      case 'Out of Season': return 'text-muted-foreground bg-muted';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const handlePriceUpdate = () => {
    onQuickEdit(product?.id, { price: parseFloat(editPrice) });
    setIsEditing(false);
  };

  return (
    <div 
      className={`bg-card border border-border rounded-lg p-4 shadow-card hover:shadow-modal transition-all cursor-pointer ${
        isSelected ? 'ring-2 ring-primary' : ''
      }`}
      onClick={() => onSelect(product)}
    >
      {/* Product Image */}
      <div className="relative mb-4 overflow-hidden rounded-md">
        <Image
          src={product?.image}
          alt={product?.imageAlt}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 flex space-x-1">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getAvailabilityColor(product?.availability)}`}>
            {product?.availability}
          </span>
        </div>
      </div>
      {/* Product Info */}
      <div className="space-y-3">
        <div>
          <h3 className="font-heading font-semibold text-foreground text-lg">{product?.name}</h3>
          <p className="text-sm text-muted-foreground">{product?.variety}</p>
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between">
          {isEditing ? (
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value={editPrice}
                onChange={(e) => setEditPrice(e?.target?.value)}
                className="w-20 px-2 py-1 text-sm border border-border rounded"
                step="0.01"
                onClick={(e) => e?.stopPropagation()}
              />
              <Button
                variant="ghost"
                onClick={(e) => {
                  e?.stopPropagation();
                  handlePriceUpdate();
                }}
                iconName="Check"
                iconSize={14}
                className="px-2 py-1"
              />
              <Button
                variant="ghost"
                onClick={(e) => {
                  e?.stopPropagation();
                  setIsEditing(false);
                  setEditPrice(product?.price);
                }}
                iconName="X"
                iconSize={14}
                className="px-2 py-1"
              />
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold text-foreground">${product?.price}</span>
              <Button
                variant="ghost"
                onClick={(e) => {
                  e?.stopPropagation();
                  setIsEditing(true);
                }}
                iconName="Edit2"
                iconSize={14}
                className="px-2 py-1"
              />
            </div>
          )}
          <span className="text-sm text-muted-foreground">per {product?.unit}</span>
        </div>

        {/* Stock Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Package" size={16} className="text-muted-foreground" />
            <span className="text-sm text-foreground">{product?.stock} in stock</span>
          </div>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStockStatusColor(product?.stock)}`}>
            {product?.stock <= 10 ? 'Low Stock' : product?.stock <= 50 ? 'Medium' : 'Good'}
          </span>
        </div>

        {/* Season Info */}
        <div className="flex items-center space-x-2">
          <Icon name="Calendar" size={16} className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Season: {product?.season}</span>
        </div>

        {/* Quick Actions */}
        <div className="flex space-x-2 pt-2 border-t border-border">
          <Button
            variant="outline"
            onClick={(e) => {
              e?.stopPropagation();
              onQuickEdit(product?.id, { stock: product?.stock + 10 });
            }}
            iconName="Plus"
            iconSize={14}
            className="flex-1 text-xs"
          >
            Add Stock
          </Button>
          <Button
            variant="outline"
            onClick={(e) => {
              e?.stopPropagation();
              // Handle seasonal pricing
            }}
            iconName="TrendingUp"
            iconSize={14}
            className="flex-1 text-xs"
          >
            Pricing
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
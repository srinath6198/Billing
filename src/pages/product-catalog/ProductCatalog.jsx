import React, { useState, useEffect, useMemo } from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import QuickActionToolbar from '../../components/ui/QuickActionToolbar';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProductCard from './components/ProductCard';
import ProductFilters from './components/ProductFilters';
import ProductDetailPanel from './components/ProductDetailPanel';
import BulkActionsToolbar from './components/BulkActionsToolbar';
import AddProductModal from './components/AddProductModal';

const ProductCatalog = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    type: '',
    season: '',
    availability: '',
    stockStatus: '',
    minPrice: '',
    maxPrice: '',
    sortBy: 'name'
  });
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  // Mock product data
  useEffect(() => {
    const mockProducts = [
  
    {
      id: '8', name: 'Blue Hydrangea', variety: 'Endless Summer', type: 'Hydrangea', price: 6.50, stock: 60, unit: 'stem', season: 'Summer', availability: 'In Season',
      supplierCost: 3.90,
      description: `Large blue hydrangea blooms with clustered flowers and sturdy stems.\nPerfect for creating volume in arrangements and centerpieces.\nColor intensity varies with soil pH and growing conditions.`,
      image: "https://images.unsplash.com/photo-1567768741888-c8c6aeb0adb2", imageAlt: 'Large blue hydrangea blooms with clustered small flowers creating full rounded heads',
      bulkPricing: [
      { quantity: 30, price: 6.18 },
      { quantity: 50, price: 5.85 },
      { quantity: 100, price: 5.53 }]

    }];


    setProducts(mockProducts);
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Apply filters
    if (filters?.search) {
      filtered = filtered?.filter((product) =>
      product?.name?.toLowerCase()?.includes(filters?.search?.toLowerCase()) ||
      product?.variety?.toLowerCase()?.includes(filters?.search?.toLowerCase())
      );
    }

    if (filters?.type) {
      filtered = filtered?.filter((product) => product?.type === filters?.type);
    }

    if (filters?.season) {
      filtered = filtered?.filter((product) => product?.season === filters?.season);
    }

    if (filters?.availability) {
      filtered = filtered?.filter((product) => product?.availability === filters?.availability);
    }

    if (filters?.stockStatus) {
      filtered = filtered?.filter((product) => {
        switch (filters?.stockStatus) {
          case 'low':return product?.stock <= 10;
          case 'medium':return product?.stock > 10 && product?.stock <= 50;
          case 'good':return product?.stock > 50;
          default:return true;
        }
      });
    }

    if (filters?.minPrice) {
      filtered = filtered?.filter((product) => product?.price >= parseFloat(filters?.minPrice));
    }

    if (filters?.maxPrice) {
      filtered = filtered?.filter((product) => product?.price <= parseFloat(filters?.maxPrice));
    }

    // Apply sorting
    filtered?.sort((a, b) => {
      switch (filters?.sortBy) {
        case 'name':
          return a?.name?.localeCompare(b?.name);
        case 'name-desc':
          return b?.name?.localeCompare(a?.name);
        case 'price':
          return a?.price - b?.price;
        case 'price-desc':
          return b?.price - a?.price;
        case 'stock':
          return a?.stock - b?.stock;
        case 'stock-desc':
          return b?.stock - a?.stock;
        default:
          return 0;
      }
    });

    return filtered;
  }, [products, filters]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters({
      search: '',
      type: '',
      season: '',
      availability: '',
      stockStatus: '',
      minPrice: '',
      maxPrice: '',
      sortBy: 'name'
    });
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleProductUpdate = (productId, updates) => {
    setProducts((prev) => prev?.map((product) =>
    product?.id === productId ? { ...product, ...updates } : product
    ));

    if (selectedProduct && selectedProduct?.id === productId) {
      setSelectedProduct((prev) => ({ ...prev, ...updates }));
    }
  };

  const handleQuickEdit = (productId, updates) => {
    handleProductUpdate(productId, updates);
  };

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

  const handleBulkAction = (action, data) => {
    switch (action) {
      case 'updatePricing':
        setProducts((prev) => prev?.map((product) => {
          if (data?.productIds?.includes(product?.id)) {
            let newPrice = product?.price;
            const { type, value, operation } = data?.adjustment;

            if (operation === 'increase') {
              newPrice = type === 'percentage' ?
              product?.price * (1 + value / 100) :
              product?.price + value;
            } else if (operation === 'decrease') {
              newPrice = type === 'percentage' ?
              product?.price * (1 - value / 100) :
              product?.price - value;
            } else if (operation === 'set') {
              newPrice = value;
            }

            return { ...product, price: Math.max(0, newPrice) };
          }
          return product;
        }));
        break;

      case 'updateStock':
        setProducts((prev) => prev?.map((product) => {
          if (data?.productIds?.includes(product?.id)) {
            let newStock = product?.stock;
            const { type, value } = data?.adjustment;

            if (type === 'add') {
              newStock = product?.stock + value;
            } else if (type === 'subtract') {
              newStock = product?.stock - value;
            } else if (type === 'set') {
              newStock = value;
            }

            return { ...product, stock: Math.max(0, newStock) };
          }
          return product;
        }));
        break;

      case 'updateAvailability':
        setProducts((prev) => prev?.map((product) => {
          if (data?.productIds?.includes(product?.id)) {
            return { ...product, availability: data?.availability };
          }
          return product;
        }));
        break;

      case 'exportSelected':
        // Handle export functionality
        console.log('Exporting products:', data?.productIds);
        break;
    }

    setSelectedProducts([]);
  };

  const handleProductSelection = (productId, isSelected) => {
    if (isSelected) {
      setSelectedProducts((prev) => [...prev, productId]);
    } else {
      setSelectedProducts((prev) => prev?.filter((id) => id !== productId));
    }
  };

  const quickActions = [
  {
    label: 'Add Product',
    icon: 'Plus',
    onClick: () => setIsAddModalOpen(true),
    primary: true
  },
  {
    label: 'Seasonal Pricing',
    icon: 'Calendar',
    onClick: () => {/* Handle seasonal pricing wizard */}
  },
  {
    label: 'Import Products',
    icon: 'Upload',
    onClick: () => {/* Handle import */}
  },
  {
    label: 'Export Catalog',
    icon: 'Download',
    onClick: () => {/* Handle export */}
  }];


  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <Breadcrumb />

          {/* Page Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-heading font-bold text-foreground mb-2">
                Product Catalog
              </h1>
              <p className="text-muted-foreground">
                Manage your flower inventory, pricing, and seasonal availability
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center bg-card border border-border rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  onClick={() => setViewMode('grid')}
                  iconName="Grid3X3"
                  iconSize={16}
                  className="px-3 py-2" />

                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  onClick={() => setViewMode('list')}
                  iconName="List"
                  iconSize={16}
                  className="px-3 py-2" />

              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <QuickActionToolbar
            actions={quickActions}
            searchable={true}
            searchPlaceholder="Search products..."
            onSearch={(query) => handleFilterChange('search', query)}
            className="mb-6" />


          {/* Filters */}
          <ProductFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
            productCount={filteredProducts?.length} />


          {/* Bulk Actions */}
          <BulkActionsToolbar
            selectedProducts={selectedProducts}
            onBulkAction={handleBulkAction}
            onClearSelection={() => setSelectedProducts([])} />


          {/* Main Content */}
          <div className="flex gap-6">
            {/* Product Grid */}
            <div className="flex-1">
              {filteredProducts?.length === 0 ?
              <div className="bg-card border border-border rounded-lg p-12 text-center">
                  <Icon name="Package" size={48} className="text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    No products found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters or add a new product to get started.
                  </p>
                  <Button
                  variant="default"
                  onClick={() => setIsAddModalOpen(true)}
                  iconName="Plus"
                  iconPosition="left"
                  iconSize={16}>

                    Add Product
                  </Button>
                </div> :

              <div className={`grid gap-6 ${
              viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`
              }>
                  {filteredProducts?.map((product) =>
                <div key={product?.id} className="relative">
                      <input
                    type="checkbox"
                    checked={selectedProducts?.includes(product?.id)}
                    onChange={(e) => handleProductSelection(product?.id, e?.target?.checked)}
                    className="absolute top-4 left-4 z-10 w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary" />

                      <ProductCard
                    product={product}
                    onSelect={handleProductSelect}
                    onQuickEdit={handleQuickEdit}
                    isSelected={selectedProduct?.id === product?.id} />

                    </div>
                )}
                </div>
              }
            </div>

            {/* Product Detail Panel */}
            <ProductDetailPanel
              product={selectedProduct}
              onUpdate={handleProductUpdate}
              onClose={() => setSelectedProduct(null)} />

          </div>
        </div>
      </main>
      {/* Add Product Modal */}
      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddProduct} />

    </div>);

};

export default ProductCatalog;
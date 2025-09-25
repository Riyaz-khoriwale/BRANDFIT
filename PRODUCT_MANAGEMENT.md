# Product Management Guide for BRAND FIT FASHION STORE

This guide explains how to add and manage products in your BRAND FIT FASHION STORE website.

## Table of Contents
1. [Accessing the Admin Panel](#accessing-the-admin-panel)
2. [Managing Categories](#managing-categories)
3. [Adding Products](#adding-products)
4. [Product Fields Explained](#product-fields-explained)
5. [Product Images](#product-images)
6. [Size and Color Options](#size-and-color-options)
7. [Managing Existing Products](#managing-existing-products)
8. [Best Practices](#best-practices)

## Accessing the Admin Panel

To access the admin panel:
1. Navigate to `/admin` in your browser (e.g., `http://localhost:3000/admin`)
2. The admin dashboard will show you an overview of your store statistics
3. From there, you can access product and category management

## Managing Categories

Before adding products, you should set up your product categories:

### Adding a Category
1. Go to `/admin/categories`
2. Fill in the category details:
   - **Name**: The category name (e.g., "Formal Wear", "Casual Wear")
   - **Description**: Optional description of the category
   - **Image URL**: Optional category image URL
3. Click "Add Category"

### Default Categories
Your store comes with these default categories:
- Formal Wear
- Casual Wear
- Business Suits
- Accessories

### Editing or Deleting Categories
1. Go to `/admin/categories`
2. Find the category you want to edit/delete
3. Click the Edit (pencil) icon to modify or Trash (delete) icon to remove
4. Confirm deletion when prompted

## Adding Products

### Step-by-Step Product Addition

1. **Go to Product Addition Page**
   - Navigate to `/admin/products`
   - Or click "Add Product" from the admin dashboard

2. **Fill in Basic Information**
   - **Product Name**: The name of your product (required)
   - **SKU**: Unique product identifier (required)
   - **Description**: Detailed product description
   - **Price**: Selling price in ₹ (required)
   - **Original Price**: Original price (for showing discounts)
   - **Stock**: Available quantity
   - **Category**: Select the appropriate category (required)

3. **Set Additional Options**
   - **Featured Product**: Check to feature on homepage
   - **New Arrival**: Check to mark as new arrival
   - **On Sale**: Check to indicate sale status
   - **Brand**: Product brand (defaults to "BRAND FIT")
   - **Material**: Product material (e.g., "Cotton", "Polyester")
   - **Weight**: Product weight in kg
   - **Dimensions**: Product dimensions (e.g., "10x5x2 cm")

4. **Add Product Images**
   - Enter image URLs one by one
   - Click the "+" button to add each image
   - Images will be displayed as thumbnails
   - Remove images by clicking the "X" on each thumbnail

5. **Configure Size Options**
   - Add available sizes (e.g., S, M, L, XL, 32, 34, 36)
   - Each size appears as a removable badge
   - Common clothing sizes: S, M, L, XL, XXL
   - Common waist sizes: 28, 30, 32, 34, 36, 38

6. **Configure Color Options**
   - Add available colors (e.g., Black, White, Blue, Red)
   - Each color appears as a removable badge
   - Use standard color names for consistency

7. **Submit the Product**
   - Click "Add Product" to save
   - Wait for the success message
   - The form will reset for the next product

## Product Fields Explained

### Required Fields
- **Product Name**: The display name of the product
- **SKU**: Stock Keeping Unit - unique identifier
- **Price**: Current selling price
- **Category**: Product classification

### Optional but Important Fields
- **Description**: Detailed product information for customers
- **Original Price**: Used to calculate and display discounts
- **Stock**: Inventory quantity (prevents overselling)
- **Images**: Visual representation of products
- **Size/Color Options**: Product variations

### Marketing Fields
- **Featured Product**: Shows on homepage featured section
- **New Arrival**: Displays in new arrivals section
- **On Sale**: Shows sale badge and calculates discounts

### Technical Fields
- **Material**: Product composition information
- **Brand**: Manufacturer or brand name
- **Weight**: Used for shipping calculations
- **Dimensions**: Product size information

## Product Images

### Image Requirements
- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 800x1200px for product images
- **File Size**: Keep under 1MB for fast loading
- **Background**: Use white or neutral backgrounds
- **Multiple Views**: Include front, back, and detail shots

### Adding Images
1. Upload images to your image hosting service or CDN
2. Copy the image URLs
3. Paste each URL into the "Product Images" section
4. Click "+" to add each image

### Best Practices for Product Images
- Use high-quality, well-lit photographs
- Show multiple angles of the product
- Include a size reference (like a ruler or person wearing)
- Maintain consistent image style across all products
- Optimize images for web (compress without losing quality)

## Size and Color Options

### Size Options
For clothing, use standard sizing:
- **Small/Medium/Large**: S, M, L, XL, XXL
- **Numeric Sizes**: 28, 30, 32, 34, 36, 38 (for pants)
- **Chest Sizes**: 36, 38, 40, 42, 44 (for shirts)

### Color Options
Use standard color names:
- Basic colors: Black, White, Gray, Navy, Brown
- Bright colors: Red, Blue, Green, Yellow, Orange
- Pattern names: Striped, Checked, Polka Dot

### Managing Variants
Currently, the system supports simple size and color options. Each product can have:
- Multiple size options
- Multiple color options
- These are displayed as selectable options on the product page

## Managing Existing Products

### Viewing Products
Products are displayed on:
- Homepage (featured and new arrivals)
- Shop page (`/shop`)
- Category pages (`/category/[slug]`)
- Individual product pages (`/product/[id]`)

### Editing Products
The system supports editing products through the API. You can:
- Update product information
- Change prices and stock
- Add/remove images
- Modify size and color options

### Deleting Products
Products are not permanently deleted but marked as inactive:
- This preserves order history
- Prevents new purchases
- Allows for potential restoration

## Best Practices

### Product Naming
- Use clear, descriptive names
- Include key details (e.g., "Classic Fit White Dress Shirt")
- Be consistent with naming conventions
- Avoid special characters in names

### Pricing Strategy
- Set competitive prices
- Use original price to show discounts
- Consider your target market
- Include all costs in pricing

### Inventory Management
- Keep stock numbers accurate
- Update stock levels regularly
- Set low stock alerts mentally
- Consider seasonal inventory needs

### SEO Best Practices
- Use descriptive product names
- Write detailed, keyword-rich descriptions
- Include material and care information
- Use alt text for images (when supported)

### Customer Experience
- Provide multiple product images
- Include detailed size and color information
- Be accurate with product descriptions
- Update inventory in real-time

## Troubleshooting

### Common Issues

**Product Not Showing**
- Check if product is marked as active
- Verify category is correct
- Ensure stock is greater than 0

**Images Not Loading**
- Verify image URLs are correct
- Check if images are publicly accessible
- Ensure image format is supported

**SKU Already Exists**
- Each product must have a unique SKU
- Use the "Generate" button for automatic SKU generation
- Include category and product identifiers in SKU

**Category Not Available**
- Categories must be created before products
- Check category is active
- Verify category name is correct

### Getting Help
If you encounter issues:
1. Check browser console for errors
2. Verify all required fields are filled
3. Ensure image URLs are accessible
4. Contact technical support if problems persist

## API Endpoints

For developers, the following API endpoints are available:

### Products API
- `GET /api/products` - Get all products
- `POST /api/products` - Create new product
- `GET /api/products/[id]` - Get specific product
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Deactivate product

### Categories API
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create new category

## Future Enhancements

Planned improvements to product management:
- Bulk product import/export
- Advanced variant management
- Automated image optimization
- Inventory alerts and notifications
- Advanced SEO features
- Product reviews integration

---

This guide covers the essential aspects of product management for your BRAND FIT FASHION STORE. For additional questions or support, please refer to the technical documentation or contact your development team.
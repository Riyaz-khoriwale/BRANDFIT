// Simple test script to verify product addition functionality
const fetch = require('node-fetch');

async function testProductAddition() {
  console.log('Testing product addition functionality...\n');

  // Test 1: Check if categories API works
  console.log('1. Testing categories API...');
  try {
    const categoriesResponse = await fetch('http://localhost:3000/api/categories');
    if (categoriesResponse.ok) {
      const categories = await categoriesResponse.json();
      console.log(`✓ Categories API working. Found ${categories.length} categories.`);
      if (categories.length > 0) {
        console.log('  Sample categories:', categories.slice(0, 3).map(c => c.name));
      } else {
        console.log('  No categories found. You may need to add categories first.');
      }
    } else {
      console.log('✗ Categories API failed:', categoriesResponse.status);
    }
  } catch (error) {
    console.log('✗ Categories API error:', error.message);
  }

  // Test 2: Check if products API works
  console.log('\n2. Testing products API...');
  try {
    const productsResponse = await fetch('http://localhost:3000/api/products');
    if (productsResponse.ok) {
      const productsData = await productsResponse.json();
      console.log(`✓ Products API working. Found ${productsData.products?.length || 0} products.`);
    } else {
      console.log('✗ Products API failed:', productsResponse.status);
    }
  } catch (error) {
    console.log('✗ Products API error:', error.message);
  }

  // Test 3: Try to add a sample category if none exist
  console.log('\n3. Testing category creation...');
  try {
    const categoryResponse = await fetch('http://localhost:3000/api/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Test Category',
        description: 'A test category for verification'
      })
    });

    if (categoryResponse.ok) {
      const category = await categoryResponse.json();
      console.log('✓ Category creation successful:', category.name);
    } else {
      const error = await categoryResponse.json();
      console.log('✗ Category creation failed:', error.error);
    }
  } catch (error) {
    console.log('✗ Category creation error:', error.message);
  }

  // Test 4: Try to add a sample product
  console.log('\n4. Testing product creation...');
  try {
    // First get a category ID
    const categoriesResponse = await fetch('http://localhost:3000/api/categories');
    const categories = await categoriesResponse.json();
    
    if (categories.length > 0) {
      const categoryId = categories[0].id;
      
      const productResponse = await fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: 'Test Product',
          description: 'A test product for verification',
          price: 999.99,
          sku: 'TEST-001',
          stock: 10,
          categoryId: categoryId,
          brand: 'BRAND FIT',
          images: ['https://via.placeholder.com/300x400'],
          sizeChart: ['S', 'M', 'L'],
          colors: ['Black', 'White'],
          isFeatured: true,
          isNewArrival: true
        })
      });

      if (productResponse.ok) {
        const product = await productResponse.json();
        console.log('✓ Product creation successful:', product.name);
        console.log('  Product ID:', product.id);
        console.log('  Price: ₹', product.price);
        console.log('  Category:', product.category.name);
      } else {
        const error = await productResponse.json();
        console.log('✗ Product creation failed:', error.error);
      }
    } else {
      console.log('✗ Cannot test product creation - no categories available');
    }
  } catch (error) {
    console.log('✗ Product creation error:', error.message);
  }

  console.log('\nTest completed!');
}

// Run the test
testProductAddition().catch(console.error);
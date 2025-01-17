const Product = {
    name: 'product',
    title: 'Food Item', 
    type: 'document',
    fields: [
      {
        name: 'title', 
        title: 'Title', 
        type: 'string', 
        description: 'Name of the food item',
    },
    {
        name: 'description',
        title: 'Description'
        ,type: 'text'
        ,description: 'Detailed description of the food item'
    },
    {
        name: 'price',
        title: 'Price',
        type: 'number',
        description: 'Price of the food item'
    },
    {
        name: 'stock',
        title: 'In Stock',
        type: 'boolean',
        description: 'Availability of the food item',
    },
    {
        name: 'rating', 
        title: 'Rating', 
        type: 'number',
        description: 'Average rating of the food item',
    },
    {
        name: 'review', 
        title: 'Reviews', 
        type: 'number', 
        description: 'Number of reviews for the food item',
    },
    {
        name: 'image', 
        title: 'Image', 
        type: 'url', 
        description: 'Image URL of the food item'
    },
    {
        name: 'category', 
        title: 'Category', 
        type: 'string', 
        description: 'Category of the food item (e.g., Sweet, Savory)',
      options: {list: [{ title: 'Sweet', value: 'Sweet' },{ title: 'Savory', value: 'Savory' },],},}, 
    {
        name: 'id', 
        title: 'ID', 
        type: 'string', 
        description: 'Unique identifier for the food item',
    },
  ]}
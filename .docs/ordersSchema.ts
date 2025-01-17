
const Orders = {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      {
        name: 'userId',
        type: 'string',
        title: 'User ID',
      },
      {
        name: 'productId',
        type: 'string',
        title: 'Product ID',
      },
      {
        name: 'quantity',
        type: 'number',
        title: 'Quantity',
      },
      {
        name: 'totalPrice',
        type: 'number',
        title: 'Total Price',
      },
      {
        name: 'orderDate',
        type: 'datetime',
        title: 'Order Date',
      },
    ],
  };
  
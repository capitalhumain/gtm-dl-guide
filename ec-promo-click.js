//This is example code, and all values are example values. Please refer to the document provided to you for the values that should be used to populate the fields.

dataLayer.push({
    'event': 'promo_click',
    'ecommerce': {
      'promoClick': {
        'promotions': [
         {
           'id': 'ELADREL_PROMOIV',            // ID or Name is required.
           'name': 'El-Adrel Sale',            // ID or Name is required.
           'creative': 'banner1',              // Promo creative is optional.
           'position': 'slot1'                 // Promo position is optional.
         }]
      }
    }
  });

export const getVendors = {
  security: {
    jwt: []
  },
  tags: ['Vendor'],
  description: 'This route allow you to get all vendors data',
  opeationId: 'getAllVendors',
  parameters: [
    {
      in: 'header',
      name: 'Accept-Language',
      type: 'string',
      example: 'en_MX'
    },
    {
      in: 'query',
      name: 'filter',
      type: 'string',
      example: 'electronics',
      description:
        'This will filter all vendors and select only vendor that contain the word you insert and search in all vendor fields about this word'
    },
    {
      in: 'query',
      name: 'select',
      type: 'string',
      example: 'name, profileImage',
      description: 'Select only fields you want.'
    },
    {
      in: 'query',
      name: 'limit',
      type: 'string',
      example: '5',
      description:
        'Limit the number of vendors from for example 20 vendor to 5 vendors.'
    },
    {
      in: 'query',
      name: 'sort',
      type: 'string',
      example: '-1, name',
      description:
        'Sorting vendors according to specified field for example the name field, and the number before the field name indicates the order of items: descending (-1) or ascending (1)'
    },
    {
      in: 'query',
      name: 'page',
      type: 'string',
      example: '2',
      description:
        'When number of vendor is greater than the default 10 (or the custom limit that you set) vendors, it divides into pages each page contain 10 (or the custom limit that you set) vendors.'
    }
  ],
  responses: {
    200: {
      description: 'Get All Vendors',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                example: 'Success'
              },
              message: {
                type: 'string',
                example: 'Vendors Found Successfully.'
              },
              vendors: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '611d08a62fc210a30ecfb75b'
                    },
                    name: {
                      type: 'string',
                      example: 'Toys r us'
                    },
                    isEmailVerified: {
                      type: 'boolean',
                      example: true
                    },
                    isVerified: {
                      type: 'boolean',
                      example: true
                    },
                    users: {
                      type: 'array',
                      items: {
                        type: 'string',
                        example: '6123dab951ff329fed1bc794'
                      }
                    },
                    user: {
                      type: 'string',
                      example: '6123dab951ff329fed1bc794'
                    },
                    title: {
                      type: 'string',
                      example: 'Cheap toys for your kid'
                    },
                    email: {
                      type: 'string',
                      example: 'sales@toysrus.com'
                    },
                    phone: {
                      type: 'string',
                      example: '+255 755 755 755'
                    },
                    location: {
                      type: 'string',
                      example: 'Mlimani city, Dar es salaam'
                    },
                    about: {
                      type: 'string',
                      example:
                        'We sell kids toys for kids aged 3 to 15, with the best prices in Tanzania.'
                    },
                    profileImage: {
                      type: 'string',
                      example:
                        'https://res.cloudinary.com/dknma8cck/image/upload/v1629292710/EcommerceAPI/vendors/admin/vt3wgvwvwv4s6d1e81lr.webp'
                    },
                    profileImageId: {
                      type: 'string',
                      example:
                        'EcommerceAPI/Vendors/Profile/vt3wgvwvwv4s6d1e81lr'
                    },
                    logo: {
                      type: 'string',
                      example:
                        'https://res.cloudinary.com/dknma8cck/image/upload/v1629292710/EcommerceAPI/vendors/admin/vt3wgvwvwv4s6d1e81lr.webp'
                    },
                    logoId: {
                      type: 'string',
                      example: 'EcommerceAPI/Vendors/Logo/vt3wgvwvwv4s6d1e81lr'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    404: {
      description: 'Error: 404',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              type: {
                type: 'string',
                example: 'Error'
              },
              message: {
                type: 'string',
                example: 'No Vendors Found'
              }
            }
          }
        }
      }
    }
  }
};
  
  export const getVendor = {
    security: {
      jwt: []
    },
    tags: ['Vendor'],
    description: "This route allow you to get a vendor using it's ID",
    opeationId: 'getVendor',
    parameters: [
      {
        in: 'header',
        name: 'Accept-Language',
        type: 'string',
        example: 'en_MX'
      },
      {
        in: 'path',
        name: 'id',
        type: 'integer',
        description: 'Vendor ID'
      }
    ],
    responses: {
      200: {
        description: 'Get Vendor',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                type: {
                  type: 'string',
                  example: 'Success'
                },
                message: {
                  type: 'string',
                  example: 'Vendor Found Successfully.'
                },
                vendor: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '611d08a62fc210a30ecfb75b'
                    },
                    name: {
                      type: 'string',
                      example: 'Toys r us'
                    },
                    isEmailVerified: {
                      type: 'boolean',
                      example: true
                    },
                    isVerified: {
                      type: 'boolean',
                      example: true
                    },
                    users: {
                      type: 'array',
                      items: {
                        type: 'string',
                        example: '6123dab951ff329fed1bc794'
                      }
                    },
                    products: {
                      type: 'array',
                      items: {
                        type: 'product',
                        example: '611f6385628e64b6ff96393c'
                      }
                    },
                    user: {
                      type: 'string',
                      example: '6123dab951ff329fed1bc794'
                    },
                    title: {
                      type: 'string',
                      example: 'Cheap toys for your kid'
                    },
                    email: {
                      type: 'string',
                      example: 'sales@toysrus.com'
                    },
                    phone: {
                      type: 'string',
                      example: '+255 755 755 755'
                    },
                    location: {
                      type: 'string',
                      example: 'Mlimani city, Dar es salaam'
                    },
                    about: {
                      type: 'string',
                      example: 'We sell kids toys for kids aged 3 to 15, with the best prices in Tanzania.'
                    },
                    profileImage: {
                      type: 'string',
                      example:
                        'https://res.cloudinary.com/dknma8cck/image/upload/v1629292710/EcommerceAPI/vendors/admin/vt3wgvwvwv4s6d1e81lr.webp'
                    },
                    profileImageId: {
                      type: 'string',
                      example: 'EcommerceAPI/Vendors/Profile/vt3wgvwvwv4s6d1e81lr'
                    },
                    logo: {
                      type: 'string',
                      example:
                        'https://res.cloudinary.com/dknma8cck/image/upload/v1629292710/EcommerceAPI/vendors/admin/vt3wgvwvwv4s6d1e81lr.webp'
                    },
                    logoId: {
                      type: 'string',
                      example: 'EcommerceAPI/Vendors/Logo/vt3wgvwvwv4s6d1e81lr'
                    }
                  }
                }
              }
            }
          }
        }
      },
      404: {
        description: 'Error: 404',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                type: {
                  type: 'string',
                  example: 'Error'
                },
                message: {
                  type: 'string',
                  example: 'No Vendor Found With This ID: {id}'
                }
              }
            }
          }
        }
      }
    }
  };
  
  export const createVendor = {
    tags: ['Vendor'],
    description: 'This route allow only user to add new vendor, which in turn makes that user a seller.',
    opeationId: 'addVendor',
    parameters: [
      {
        in: 'header',
        name: 'Accept-Language',
        type: 'string',
        example: 'en_MX'
      }
    ],
    requestBody: {
      required: true,
      content: {
        'multipart/form-data': {
          schema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                required: true
              },
              title: {
                type: 'string',
                required: true
              },
              about: {
                type: 'string',
                required: true
              },
              email: {
                type: 'string',
                required: true
              },
              phone: {
                type: 'string',
                required: true
              },
              location: {
                type: 'string',
                required: true
              },
              logo: {
                type: 'string',
                format: 'image',
                required: true
              }
            }
          }
        }
      }
    },
    responses: {
      201: {
        description: 'Add new vendor',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                type: {
                  type: 'string',
                  example: 'Success'
                },
                message: {
                  type: 'string',
                  example: 'Vendor Created Successfully.'
                },
                vendor: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '611d08a62fc210a30ecfb75b'
                    },
                    name: {
                      type: 'string',
                      example: 'Toys r us'
                    },
                    isEmailVerified: {
                      type: 'boolean',
                      example: true
                    },
                    isVerified: {
                      type: 'boolean',
                      example: true
                    },
                    users: {
                      type: 'array',
                      items: {
                        type: 'string',
                        example: '6123dab951ff329fed1bc794'
                      }
                    },
                    products: {
                      type: 'array',
                      items: {
                        type: 'product',
                        example: '611f6385628e64b6ff96393c'
                      }
                    },
                    user: {
                      type: 'string',
                      example: '6123dab951ff329fed1bc794'
                    },
                    title: {
                      type: 'string',
                      example: 'Cheap toys for your kid'
                    },
                    email: {
                      type: 'string',
                      example: 'sales@toysrus.com'
                    },
                    phone: {
                      type: 'string',
                      example: '+255 755 755 755'
                    },
                    location: {
                      type: 'string',
                      example: 'Mlimani city, Dar es salaam'
                    },
                    about: {
                      type: 'string',
                      example: 'We sell kids toys for kids aged 3 to 15, with the best prices in Tanzania.'
                    },
                    profileImage: {
                      type: 'string',
                      example:
                        'https://res.cloudinary.com/dknma8cck/image/upload/v1629292710/EcommerceAPI/vendors/admin/vt3wgvwvwv4s6d1e81lr.webp'
                    },
                    profileImageId: {
                      type: 'string',
                      example: 'EcommerceAPI/Vendors/Profile/vt3wgvwvwv4s6d1e81lr'
                    },
                    logo: {
                      type: 'string',
                      example:
                        'https://res.cloudinary.com/dknma8cck/image/upload/v1629292710/EcommerceAPI/vendors/admin/vt3wgvwvwv4s6d1e81lr.webp'
                    },
                    logoId: {
                      type: 'string',
                      example: 'EcommerceAPI/Vendors/Logo/vt3wgvwvwv4s6d1e81lr'
                    }
                  }
                }
              }
            }
          }
        }
      },
      400: {
        description: 'Error: 400',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                type: {
                  type: 'string',
                  example: 'Error'
                },
                message1: {
                  type: 'string',
                  example: 'Logo Is Required, Please Upload an Image'
                },
                message2: {
                  type: 'string',
                  example: 'All Fields Are Required'
                }
              }
            }
          }
        }
      },
      409: {
        description: 'Error: 409',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                type: {
                  type: 'string',
                  example: 'Error'
                },
                message: {
                  type: 'string',
                  example: 'Email Is Already Taken: {email}'
                }
              }
            }
          }
        }
      }
    }
  };
  
  export const updateVendorDetails = {
    tags: ['Vendor'],
    description:
      'This route allow logged in vendor owner to update his vendor profile details',
    opeationId: 'updateVendorDetails',
    parameters: [
      {
        in: 'header',
        name: 'Accept-Language',
        type: 'string',
        example: 'ar_MX'
      }
    ],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              id: {
                type: 'string'
              },
              name: {
                type: 'string'
              },
              title: {
                type: 'string'
              },
              email: {
                type: 'string'
              },
              phone: {
                type: 'string'
              },
              location: {
                type: 'string'
              },
              about: {
                type: 'string'
              }
            }
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Update vendor details',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                type: {
                  type: 'string',
                  example: 'Success'
                },
                message: {
                  type: 'string',
                  example: 'Vendor Details Updated Successfully.'
                },
                vendor: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '611d08a62fc210a30ecfb75b'
                    },
                    name: {
                      type: 'string',
                      example: 'Toys r us'
                    },
                    isEmailVerified: {
                      type: 'boolean',
                      example: true
                    },
                    isVerified: {
                      type: 'boolean',
                      example: true
                    },
                    users: {
                      type: 'array',
                      items: {
                        type: 'string',
                        example: '6123dab951ff329fed1bc794'
                      }
                    },
                    products: {
                      type: 'array',
                      items: {
                        type: 'product',
                        example: '611f6385628e64b6ff96393c'
                      }
                    },
                    user: {
                      type: 'string',
                      example: '6123dab951ff329fed1bc794'
                    },
                    title: {
                      type: 'string',
                      example: 'Cheap toys for your kid'
                    },
                    email: {
                      type: 'string',
                      example: 'sales@toysrus.com'
                    },
                    phone: {
                      type: 'string',
                      example: '+255 755 755 755'
                    },
                    location: {
                      type: 'string',
                      example: 'Mlimani city, Dar es salaam'
                    },
                    about: {
                      type: 'string',
                      example: 'We sell kids toys for kids aged 3 to 15, with the best prices in Tanzania.'
                    },
                    profileImage: {
                      type: 'string',
                      example:
                        'https://res.cloudinary.com/dknma8cck/image/upload/v1629292710/EcommerceAPI/vendors/admin/vt3wgvwvwv4s6d1e81lr.webp'
                    },
                    profileImageId: {
                      type: 'string',
                      example: 'EcommerceAPI/Vendors/Profile/vt3wgvwvwv4s6d1e81lr'
                    },
                    logo: {
                      type: 'string',
                      example:
                        'https://res.cloudinary.com/dknma8cck/image/upload/v1629292710/EcommerceAPI/vendors/admin/vt3wgvwvwv4s6d1e81lr.webp'
                    },
                    logoId: {
                      type: 'string',
                      example: 'EcommerceAPI/Vendors/Logo/vt3wgvwvwv4s6d1e81lr'
                    }
                  }
                }
              }
            }
          }
        }
      },
      400: {
        description: 'Error: 400',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                type: {
                  type: 'string',
                  example: 'Error'
                },
                message: {
                  type: 'string',
                  example:
                    'Cannot Update Profile, You Are Not The Owner Of This Vendor.'
                }
              }
            }
          }
        }
      },
      409: {
        description: 'Error: 409',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                type: {
                  type: 'string',
                  example: 'Error'
                },
                message: {
                  type: 'string',
                  example: 'This Email Is Already Taken: {email}'
                }
              }
            }
          }
        }
      }
    }
  };
  
  export const updateVendorProfileImage = {
    tags: ['Vendor'],
    description:
    'This route allow logged in vendor owner to update his vendor profile image',
    opeationId: 'updateVendorProfileImage',
    parameters: [
      {
        in: 'header',
        name: 'Accept-Language',
        type: 'string',
        example: 'en_MX'
      }
    ],
    requestBody: {
      required: true,
      content: {
        'multipart/form-data': {
          schema: {
            type: 'object',
            properties: {
              image: {
                type: 'string',
                format: 'image',
                required: true
              }
            }
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Update Vendor profile image',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                type: {
                  type: 'string',
                  example: 'Success'
                },
                message: {
                  type: 'string',
                  example: 'Vendor Image Updated Successfully.'
                }
              }
            }
          }
        }
      },
      400: {
        description: 'Error: 400',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                type: {
                  type: 'string',
                  example: 'Error'
                },
                message: {
                  type: 'string',
                  example: 'Profile Image Is Required, Please Upload an Image'
                }
              }
            }
          }
        }
      }
    }
  };
  
  
  export const updateVendorLogo = {
    tags: ['Vendor'],
    description:
    'This route allow logged in vendor owner to update his vendor logo',
    opeationId: 'updateVendorLogo',
    parameters: [
      {
        in: 'header',
        name: 'Accept-Language',
        type: 'string',
        example: 'en_MX'
      }
    ],
    requestBody: {
      required: true,
      content: {
        'multipart/form-data': {
          schema: {
            type: 'object',
            properties: {
              image: {
                type: 'string',
                format: 'image',
                required: true
              }
            }
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Update Vendor Logo',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                type: {
                  type: 'string',
                  example: 'Success'
                },
                message: {
                  type: 'string',
                  example: 'Vendor Logo Updated Successfully.'
                }
              }
            }
          }
        }
      },
      400: {
        description: 'Error: 400',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                type: {
                  type: 'string',
                  example: 'Error'
                },
                message: {
                  type: 'string',
                  example: 'Logo Image Is Required, Please Upload an Image'
                }
              }
            }
          }
        }
      }
    }
  };

  export const updateVendorStatus = {
    tags: ['Vendor'],
    description:
      "This route allow only the admin to activate/deactivate vendor account using it's ID",
    opeationId: 'updateVendorStatus',
    parameters: [
      {
        in: 'header',
        name: 'Accept-Language',
        type: 'string',
        example: 'ar_MX'
      }
    ],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              id: {
                type: 'string'
              },
              isVerified: {
                type: 'boolean'
              }
            }
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Change vendor status',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                type: {
                  type: 'string',
                  example: 'Success'
                },
                message: {
                  type: 'string',
                  example: 'Vendor Status Changed Successfully.'
                },
                vendor: {
                  type: 'object',
                  properties: {
                    _id: {
                      type: 'string',
                      example: '611d08a62fc210a30ecfb75b'
                    },
                    name: {
                      type: 'string',
                      example: 'Toys r us'
                    },
                    isEmailVerified: {
                      type: 'boolean',
                      example: true
                    },
                    isVerified: {
                      type: 'boolean',
                      example: true
                    },
                    users: {
                      type: 'array',
                      items: {
                        type: 'string',
                        example: '6123dab951ff329fed1bc794'
                      }
                    },
                    products: {
                      type: 'array',
                      items: {
                        type: 'product',
                        example: '611f6385628e64b6ff96393c'
                      }
                    },
                    user: {
                      type: 'string',
                      example: '6123dab951ff329fed1bc794'
                    },
                    title: {
                      type: 'string',
                      example: 'Cheap toys for your kid'
                    },
                    email: {
                      type: 'string',
                      example: 'sales@toysrus.com'
                    },
                    phone: {
                      type: 'string',
                      example: '+255 755 755 755'
                    },
                    location: {
                      type: 'string',
                      example: 'Mlimani city, Dar es salaam'
                    },
                    about: {
                      type: 'string',
                      example: 'We sell kids toys for kids aged 3 to 15, with the best prices in Tanzania.'
                    },
                    profileImage: {
                      type: 'string',
                      example:
                        'https://res.cloudinary.com/dknma8cck/image/upload/v1629292710/EcommerceAPI/vendors/admin/vt3wgvwvwv4s6d1e81lr.webp'
                    },
                    profileImageId: {
                      type: 'string',
                      example: 'EcommerceAPI/Vendors/Profile/vt3wgvwvwv4s6d1e81lr'
                    },
                    logo: {
                      type: 'string',
                      example:
                        'https://res.cloudinary.com/dknma8cck/image/upload/v1629292710/EcommerceAPI/vendors/admin/vt3wgvwvwv4s6d1e81lr.webp'
                    },
                    logoId: {
                      type: 'string',
                      example: 'EcommerceAPI/Vendors/Logo/vt3wgvwvwv4s6d1e81lr'
                    }
                  }
                }
              }
            }
          }
        }
      },
      404: {
        description: 'Error: 404',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                type: {
                  type: 'string',
                  example: 'Error'
                },
                message: {
                  type: 'string',
                  example: 'No Vendor Found With This ID: {id}'
                }
              }
            }
          }
        }
      }
    }
  };

  export const deleteVendor = {
    tags: ['Vendor'],
    description:
      "This route allow only the vendor owner to delete vendor account using it's ID",
    opeationId: 'deleteVendor',
    parameters: [
      {
        in: 'header',
        name: 'Accept-Language',
        type: 'string',
        example: 'ar_MX'
      },
      {
        in: 'path',
        name: 'id',
        type: 'integer',
        description: 'Vendor ID'
      }
    ],
    responses: {
      200: {
        description: 'Delete vendor account',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                type: {
                  type: 'string',
                  example: 'Success'
                },
                message: {
                  type: 'string',
                  example: 'Vendor Deleted Successfully.'
                }
              }
            }
          }
        }
      },
      404: {
        description: 'Error: 404',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                type: {
                  type: 'string',
                  example: 'Error'
                },
                message: {
                  type: 'string',
                  example: 'No Vendor Found With This ID: {id}'
                }
              }
            }
          }
        }
      }
    }
  };
  
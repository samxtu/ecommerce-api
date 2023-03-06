export const availableLangs = ['sw', 'en'];

export const messages = {
  en: {
    profileImageRequired: 'Profile image is required, please upload an image!',
    vendorImageRequired: 'Vendor profile image is required, please upload an image!',
    vendorLogoRequired: 'Vendor logo image is required, please upload an image!',
    fieldsRequired: 'All fields are required.',
    passwordLength:
      'Password must be longer than 8 characters and contains letters, numbers, and symbols.',
    roleRestriction: 'Role must be one of the following: user or seller.',
    emailTaken: 'Email is already taken.',
    emailPasswordRequired: 'Please enter both email and password!',
    incorrectEmailOrPassword: 'Incorrect email or password.',
    passConfirm: 'Password and passwordConfirmation must be the same.',
    invalidLink: 'Invalid link or expired',
    notSamePassword:
      'This is not your password. Please enter the correct current password.',
    loginAgain: 'Please login again!',
    noTokenFound: 'No token found.',
    noUserFound: 'No user found.',
    emailVerified: 'Email is already verified.',
    noProductFound: 'No product found with this ID.',
    productExist: 'Product already exits',
    noProductsFound: 'No products found.',
    invalidRequest: 'Invalid request.',
    noCartForUser: 'No cart found for user with this email.',
    noCartFound: 'No cart found.',
    noProductInCartWithID: 'No product found with this ID in the cart.',
    noCategories: 'No categories found.',
    noCategoryFound: 'No category found with this ID.',
    categoryImageRequired: 'Image is required, please upload an image!',
    noOrders: 'No orders found',
    noOrder: 'No order found',
    noFavoriteListFound: 'No favorite list found.',
    noProductsInFavorite: 'No products on the favorite list found',
    selectImage: 'Please select an image!',
    notSeller:
      'Sorry you are not the owner of this product, you cannot perform this operation.',
    selectImages: 'Please select one or more images!',
    noReviewsFound: 'No reviews found.',
    noReviewFound: 'No review found with this ID',
    onlyOneReview: 'Sorry, you cannot write more than one review.',
    ratingLessThanOne: 'Sorry but rating cannot be less than one.',
    notReviewCreator:
      'Sorry you are not the creator of this review. You are not authorized to perform this action.',
    noUsersFound: 'No users found.',
    noDiscountCodeFound: 'No discount code found.',
    haveDiscountCode:
      'You have now a discount code, please use it before using another one.',
    noDiscountCodesFound: 'No discount codes found',
    noUserFoundWithID: 'No user found with this ID.',
    notFoundInFavoriteList: 'Product not found in favorite list.',
    colorExists: 'Color already exists.',
    sizeExists: 'Size already exists',
    noColorExists: 'Color does not exist.',
    noSizeExists: 'Size does not exist.',
    notInStatusEnum:
      'Sorry by status must be one of the following: Not Processed, Processing, Shipped, Waiting Delivery, Delivered, Cancelled.',
    notColorOrSizesRoute:
      'Sorry this is not the right route to update colors and sizes.',
    passwordUpdateRoute:
      'Cannot update password from here, please go to update password route.',
    successfulSignUp: 'Account created successful, please verify your email!',
    successfulLogin: 'User logged in successfuly.',
    successfulLogout: 'Logged out successfuly.',
    successfulAddProductColor: 'Color added successfully.',
    successfulAddProductSize: 'Size added successfully.',
    successfulDeleteProductColor: 'Color deleted successfully.',
    successfulDeleteProductSize: 'Size deleted successfully.',
    successfulTokenGeneration: 'Tokens generated successfully.',
    successfulPasswordChange: 'Password changed successfully.',
    successfulEmailVerification: 'Email verified successfully.',
    successfulResetLink: 'Reset password link sent successfully.',
    successfulSendVerificationEmail: 'Verification email sent successfully.',
    successfulItemAddToCart: 'Item added to cart successfully.',
    successfulReduceByOne: 'Item reduced by one from cart successfully.',
    successfulIncreaseByOne: 'Item increased by one in cart successfully.',
    successfulCartFound: 'Cart found successfully.',
    successfulCartDelete: 'Cart deleted successfully.',
    successfulDeleteItemFromCart: 'Item deleted from cart successfully.',
    successfulCategoryCreate: 'Category created successfully.',
    successfulCategoriesFound: 'Found categories successfully.',
    successfulCategoryFound: 'Category found successfully.',
    successfulCategoryDetails: 'Category details updated successfully.',
    successfulCategoryImage: 'Category image updated successfully.',
    successfulCategoryDelete: 'Category deleted successfully.',
    successfulOrderCreate: 'Order created successfully.',
    successfulOrdersFound: 'Orders found successfully.',
    successfulOrderFound: 'Order found successfully.',
    successfulOrderCancel: 'Order cancelled successfully.',
    successfulFavoriteAdd: 'Product added to favorite list successfully.',
    successfulFavoriteGet: 'Favorite list successfully retrieved.',
    successfulProductsFound: 'Products found successfully.',
    successfulProductFound: 'Product found successfully.',
    successfulProductCreate: 'Product created successfully.',
    successfulProductDetails: 'Product detials updated successfully.',
    successfulProductMainImage: 'Product main image updated successfully.',
    successfulProductSubImages: 'Product sub images updated successfully.',
    successfulProductDelete: 'Product deleted successfully.',
    successfulReviewCreate: 'Review created successfully.',
    successfulReviewsFound: 'Reviews found successfully.',
    successfulReviewFound: 'Review found successfully.',
    successfulReviewUpdate: 'Review updated successfully.',
    successfulReviewDelete: 'Review deleted successfully.',
    successfulUsersFound: 'Users found successfully.',
    successfulUserFound: 'User found successfully.',
    successfulUserDetails: 'User details updated successfully.',
    successfulUserImage: 'User image updated successfully.',
    successfulUserDelete: 'Account deleted successfully.',
    successfulDeleteYourAccount: 'Your account deleted successfully.',
    productStatics: 'These are some statistics about products.',
    successfulDeleteProductFromFavorite:
      'Product deleted from favorite list successfully.',
    successfulProductFoundInFavorite: 'Product in favorite list.',
    successfulCodeVerification:
      'Discount code verification completed successfully.',
    successfulDiscountCodesFound: 'Discount codes found successfully.',
    successfulCodeGeneration: 'Discount code generated successfully.',
    successfulStatusUpdate: 'Order status updated successfully.',
    discountCodeDeleted: 'Discount code deleted successfully.',
    discountCodeCanceled: 'Discount code cancelled from order successfully.',
    successfulGetDiscount: 'Discount found successfully.',
    successfulVendorCreation: 'Vendor account created successfully.',
    successfulVendorsFound: 'Vendors found successfully.',
    successfulVendorFound: 'Vendor found successfully.',
    successfulVendorDetails: 'Vendor details updated successfully.',
    successfulVendorProfileImage: 'Vendor profile image updated successfully.',
    successfulVendorLogo: 'Vendor logo updated successfully.',
    successfulVendorDelete: 'Account deleted successfully.',
    notVendorUser: 'You are not allowed to change this info.',
    noVendorFoundWithID: 'No vendor found with this ID.',
    noVendorsFound: 'No vendors found.',
    successfulVendorStatus: 'Vendor status updated successfully.'
  },
  sw: {
    profileImageRequired: 'Tafadhali chagua picha ya mtumiaji.',
    vendorImageRequired: 'Tafadhali chagua picha ya profile ya mchuuzi.',
    vendorLogoRequired: 'Tafadhali chagua picha ya logo ya mchuuzi.',
    fieldsRequired: 'Tafadhali jaza sehemu zote.',
    passwordLength:
      'Upana wa nywila lazima uwe kati ya herufi 6 na 20.',
    roleRestriction: 'Hakuna ruhusa ya kufanya hivyo.',
    emailTaken: 'Barua pepe tayari imetumika.',
    emailPasswordRequired:
      'Tafadhali jaza barua pepe na nywila.',
    incorrectEmailOrPassword: 'Barua pepe au nywila si sahihi.',
    loginAgain: 'Tafadhali ingia tena.',
    passConfirm: 'Nywila na uthibitisho wa nywila si sawa.',
    invalidLink: 'Kiungo hiki si sahihi.',
    noTokenFound: 'Hakuna tokeni iliyopatikana.',
    noUserFound: 'Hakuna mtumiaji aliyepatikana.',
    noProductFound: 'Hakuna bidhaa iliyopatikana.',
    noProductsFound: 'Hakuna bidhaa zilizopatikana.',
    productExist: 'Bidhaa tayari ipo.',
    emailVerified: 'Barua pepe imehakikiwa.',
    invalidRequest: 'Ombi hili si sahihi.',
    notSamePassword: 'Nywila na uthibitisho wa nywila hazifanani.',
    noCartForUser: 'Hakuna kikapu kwa mtumiaji huyu.',
    noCartFound: 'Hakuna kikapu kilichopatikana.',
    noProductInCartWithID: 'Hakuna bidhaa katika kikapu cha huyu mtumiaji.',
    noCategories: 'Hakuna aina zilizopatikana.',
    noCategoryFound: 'Hakuna aina iliyopatikana.',
    categoryImageRequired: 'Tafadhali chagua picha ya aina.',
    noOrders: 'Hakuna maombi yaliyopatikana.',
    noOrder: 'Hakuna ombi lililopatikana.',
    noFavoriteListFound: 'Hakuna orodha ya bidhaa zilizopendwa.',
    noProductsInFavorite: 'Hakuna bidhaa katika orodha ya bidhaa zilizopendwa.',
    selectImage: 'Tafadhali chagua picha!',
    selectImages: 'Tafadhali chagua picha zaidi ya moja!',
    noReviewsFound: 'Hakuna maoni yaliyopatikana.',
    noReviewFound: 'Hakuna maoni yaliyopatikana.',
    onlyOneReview: 'Unaweza kuandika maoni moja tu.',
    ratingLessThanOne: 'Tafadhali chagua kiwango cha juu cha alama.',
    notReviewCreator:
      'Huna ruhusa ya kufanya hivyo, haya maoni si yako.',
    noUsersFound: 'Hakuna watumiaji walio patikana.',
    noDiscountCodeFound:  'Hakuna kodi ya punguzo iliyopatikana.',
    noDiscountCodesFound: 'Hakuna kodi za punguzo zilizopatikana.',
    haveDiscountCode:
      'Tafadhali tumia kodi ya punguzo kwa kipindi hiki, kabla hujapata nyingine.',
    noUserFoundWithID: 'Hakuna mtumiaji aliyepatikana kwa hii ID.',
    notFoundInFavoriteList: 'Hakuna bidhaa hii katika orodha ya bidhaa zilizopendwa.',
    colorExists: 'Rangi hii tayari ipo.',
    sizeExists: 'Ukubwa huu tayari ipo.',
    noSizeExists: 'Ukubwa huu haujapatikana.',
    notSeller: 'Huna ruhusa ya kufanya hivyo, wewe si mmiliki wa hii bidhaa.',
    noColorExists: 'Rangi hii haijapatikana.',
    notColorOrSizesRoute:
      'Hakuna ruhusa ya kufanya hivyo, hii si njia ya kubadili taarifa za rangi na ukubwa.',
    notInStatusEnum:
      'Samahani, hali inabidi iwe moja kati ya hizi: haijafanyiwa kazi, inafanyiwa kazi, imepakiwa, inasubiri kufikishwa, imefikishwa, imeghairishwa.',
    passwordUpdateRoute:
      'Hakuna ruhusa ya kufanya hivyo, hii si njia ya kubadili nywila.',
    successfulAddProductColor: 'Umefanikiwa kuongeza rangi.',
    successfulAddProductSize: 'Umefanikiwa kupakia ukubwa.',
    successfulDeleteProductColor: 'Umefanikiwa kufuta rangi.',
    successfulDeleteProductSize: 'Umefanikiwa kutoa ukubwa.',
    successfulSignUp: 'Umefanikiwa kujiandikisha.',
    successfulLogin: 'Umefanikiwa kuingia.',
    successfulLogout: 'Umefanikiwa kuondoka.',
    successfulTokenGeneration: 'Umefanikiwa kuunda tokeni.',
    successfulPasswordChange: 'Umefanikiwa kubadili nywila.',
    successfulEmailVerification: 'Umefanikiwa kuhakiki barua pepe.',
    successfulResetLink:
      'Tafadhali angalia barua pepe yako ili kupata kiungo cha kurejesha nywila.',
    successfulSendVerificationEmail:
      'Tafadhali angalia barua pepe yako ili kupata kiungo cha kuthibitisha barua pepe.',
    successfulItemAddToCart: 'Umefanikiwa kuongeza bidhaa kwenye kikapu chako.',
    successfulReduceByOne: 'Umefanikiwa kupunguza bidhaa.',
    successfulIncreaseByOne: 'Umefanikiwa kuongeza idadi ya bidhaa.',
    successfulCartFound: 'Kikapu kimepatikana kwa mafanikio.',
    successfulCartDelete: 'Kikapu kimefutwa kwa mafanikio.',
    successfulDeleteItemFromCart: 'Umefanikiwa kufuta bidhaa.',
    successfulCategoryCreate: 'Umefanikiwa kutengeneza aina mpya.',
    successfulCategoriesFound: 'Aina zimepatikana kwa mafanikio.',
    successfulCategoryFound: 'Aina imepatikana kwa mafanikio.',
    successfulCategoryDetails: 'Umefanikiwa kupata taarifa za aina.',
    successfulCategoryImage: 'Umefanikiwa kupakia picha ya aina.',
    successfulCategoryDelete: 'Umefanikiwa kufuta aina.',
    successfulOrderCreate: 'Umefanikiwa kutengeneza ombi la manunuzi.',
    successfulOrdersFound: 'Maombi ya manunuzi yamepatikana kwa mafanikio.',
    successfulOrderFound: 'Ombi la manunuzi limepatikana kwa mafanikio.',
    successfulOrderCancel: 'Umefanikiwa kufuta ombi la manunuzi.',
    successfulFavoriteAdd: 'Umefanikiwa kuongeza bidhaa kwenye orodha ya bidhaa zilizopendwa.',
    successfulFavoriteGet: 'Umefanikiwa kupata orodha ya bidhaa zilizopendwa.',
    successfulProductsFound: 'Bidhaa zimepatikana kwa mafanikio.',
    successfulProductFound: 'Bidhaa imepatikana kwa mafanikio.',
    successfulProductCreate: 'Umefanikiwa kutengeneza bidhaa mpya.',
    successfulProductDetails: 'Umefanikiwa kupata taarifa za bidhaa.',
    successfulProductMainImage: 'Umefanikiwa kupakia picha kuu ya bidhaa.',
    successfulProductSubImages: 'Umefanikiwa kupakia picha za ziada za bidhaa.',
    successfulProductDelete: 'Umefanikiwa kufuta bidhaa.',
    successfulReviewCreate: 'Umefanikiwa kutengeneza maoni.',
    successfulReviewsFound: 'Maoni yamepatikana kwa mafanikio.',
    successfulReviewFound: 'Maoni yamepatikana kwa mafanikio.',
    successfulReviewUpdate: 'Umefanikiwa kubadili maoni.',
    successfulReviewDelete: 'Umefanikiwa kufuta maoni.',
    successfulUsersFound: 'Watumiaji wamepatikana kwa mafanikio.',
    successfulUserFound: 'Mtumiaji amepatikana kwa mafanikio.',
    successfulUserDetails: 'Umefanikiwa kupata taarifa za mtumiaji.',
    successfulUserImage: 'Umefanikiwa kupakia picha ya mtumiaji.',
    successfulUserDelete: 'Umefanikiwa kufuta mtumiaji.',
    successfulDeleteYourAccount: 'Umefanikiwa kufuta akaunti yako.',
    productStatics: 'Umefanikiwa kupata taarifa za bidhaa.',
    successfulDeleteProductFromFavorite: 'Umefanikiwa kufuta bidhaa kwenye orodha ya bidhaa zilizopendwa.',
    successfulProductFoundInFavorite: 'Umefanikiwa kupata bidhaa kwenye orodha ya bidhaa zilizopendwa.',
    successfulCodeVerification: 'Umefanikiwa kuthibitisha kodi.',
    successfulDiscountCodesFound: 'Kodi za kupunguza bei zimepatikana kwa mafanikio.',
    successfulCodeGeneration: 'Umefanikiwa kutengeneza kodi.',
    successfulStatusUpdate: 'Umefanikiwa kubadili hali.',
    discountCodeDeleted: 'Kodi ya kupunguza bei imefutwa kwa mafanikio.',
    discountCodeCanceled: 'Kodi ya kupunguza bei imehairishwa kwa mafanikio.',
    successfulGetDiscount: 'Umefanikiwa kupunguza bei.',
    successfulVendorCreation: 'Akaunti ya mchuuzi imetengenezwa kwa ukamilifu.',
    successfulVendorsFound: 'Wachuuzi wamepatikana kwa mafanikio.',
    successfulVendorFound: 'Mchuuzi amepatikana kwa mafanikio.',
    successfulVendorDetails: 'Umefanikiwa kubadili taarifa za mchuuzi.',
    successfulVendorProfileImage: 'Umefanikiwa kubadili picha ya profile ya mchuuzi.',
    successfulVendorLogo: 'Umefanikiwa kubadili picha ya logo ya mchuuzi.',
    successfulVendorDelete: 'Akaunti ya mchuuzi imefutwa kwa ukamilifu.',
    notVendorUser: 'Hauruhusiwi kubadili hizi taarifa.',
    noVendorFoundWithID: 'Hakuna mchuuzi aliyepatikana mwenye hii ID.',
    noVendorsFound: 'Hakuna wachuuzi waliopatikana.',
    successfulVendorStatus: 'Hali ya mchuuzi imebadilishwa kwa mafanikio.'
  }
};

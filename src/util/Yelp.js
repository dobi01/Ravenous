const apiKey = 'j4vs_p_oXdmtyD77nkl-1yolaA-F8a8vlZJuAwEHOWwCcNwCBv_BnoK22_x0tYvk_Az70vi0IQ_6KI15CDq0Sbf0z_w62dnYuqAHBSNh2AUCrbxNaPIgZquJCul7W3Yx';

let Yelp = {
  search: function(term, location, sortBy) {
    const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
          cors = 'https://cors-anywhere.herokuapp.com/';
    return fetch(cors + url, {headers: {Authorization: `Bearer ${apiKey}`}})
          .then(response => response.json())
          .then(jsonResponse => {
            if (jsonResponse.businesses) {
              return jsonResponse.businesses.map( business => {
                return {
                  id: business.id,
                  imageSrc: business.image_url,
                  name: business.name,
                  address: business.location.address1,
                  city: business.location.city,
                  state: business.location.state,
                  zipCode: business.location.zip_code,
                  category: business.categories[0].title,
                  rating: business.rating,
                  reviewCount: business.review_count
                  }
              })
            }
          });
  }
}

export default Yelp;
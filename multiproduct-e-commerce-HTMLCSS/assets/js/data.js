// TodaysBestDealsSwiper
fetch('../assets/data/ab.json')
  .then(response => response.json())
  .then(data => {
    // Get the container element
    const TodaysBestDealsSwiper = document.getElementById('TodaysBestDealsSwiper');
    // Loop through the array and create HTML elements
    data.products.forEach(obj => {
      // Create a div element for each object
      const div = document.createElement('div');
      div.classList.add('swiper-slide');
      div.innerHTML = `
      <div class="card TodaysBestDeals_card">
      <img
        src=${obj.img}
        class="TodaysBestDeals_bg_img"
        alt=${obj.altr}
      />
      <img
        src="/assets/img/heart.png"
        alt=""
        class="TodaysBestDeals_heart_on_img"
      />
      <div class="card-body bg_grey">
        <div class="d-flex fdircol">
          <h5 class="card-title me-auto">${obj.title}</h5>
          <h5 class="card-title fw-bold fst-italic">${obj.price}</h5>
        </div>
  
        <p class="card-text mb_02rem">5 colors available</p>
        <div>
          <img
            src="/assets/img/RatingGreen.png"
            alt=""
            class="rating"
          />
          <span class="rating_count"> (121)</span>
        </div>
        <a
          href="/"
          class="btn btn-outline-dark rounded-pill mt-2 btn_transperent"
        >
          Add to cart
        </a>
      </div>
    </div>
          `;

      // Append the div to the container element
      TodaysBestDealsSwiper.appendChild(div);
    });
  });
  // WeeklyPopularSwiper 
fetch('../assets/data/ab.json')
  .then(response => response.json())
  .then(data => {
    // Get the container element
    const WeeklyPopular = document.getElementById('WeeklyPopular');
    // Loop through the array and create HTML elements
    data.products.forEach(obj => {
      // Create a div element for each object
      const div = document.createElement('div');
      div.classList.add('swiper-slide');
      div.innerHTML = `
      <div class="card TodaysBestDeals_card">
      <img
        src=${obj.img}
        class="TodaysBestDeals_bg_img"
        alt=${obj.altr}
      />
      <img
        src="/assets/img/heart.png"
        alt=""
        class="TodaysBestDeals_heart_on_img"
      />
      <div class="card-body bg_grey">
        <div class="d-flex fdircol">
          <h5 class="card-title me-auto">${obj.title}</h5>
          <h5 class="card-title fw-bold fst-italic">${obj.price}</h5>
        </div>
  
        <p class="card-text mb_02rem">5 colors available</p>
        <div>
          <img
            src="/assets/img/RatingGreen.png"
            alt=""
            class="rating"
          />
          <span class="rating_count"> (121)</span>
        </div>
        <a
          href="/"
          class="btn btn-outline-dark rounded-pill mt-2 btn_transperent"
        >
          Add to cart
        </a>
      </div>
    </div>
          `;

      // Append the div to the container element
      WeeklyPopular.appendChild(div);
    });
  });
  // MostSellingswiper 
fetch('../assets/data/ab.json')
  .then(response => response.json())
  .then(data => {
    // Get the container element
    const MostSelling = document.getElementById('MostSelling');
    // Loop through the array and create HTML elements
    data.products.forEach(obj => {
      // Create a div element for each object
      const div = document.createElement('div');
      div.classList.add('swiper-slide');
      div.innerHTML = `
      <div class="card TodaysBestDeals_card">
      <img
        src=${obj.img}
        class="TodaysBestDeals_bg_img"
        alt=${obj.altr}
      />
      <img
        src="/assets/img/heart.png"
        alt=""
        class="TodaysBestDeals_heart_on_img"
      />
      <div class="card-body bg_grey">
        <div class="d-flex fdircol">
          <h5 class="card-title me-auto">${obj.title}</h5>
          <h5 class="card-title fw-bold fst-italic">${obj.price}</h5>
        </div>
  
        <p class="card-text mb_02rem">5 colors available</p>
        <div>
          <img
            src="/assets/img/RatingGreen.png"
            alt=""
            class="rating"
          />
          <span class="rating_count"> (121)</span>
        </div>
        <a
          href="/"
          class="btn btn-outline-dark rounded-pill mt-2 btn_transperent"
        >
          Add to cart
        </a>
      </div>
    </div>
          `;

      // Append the div to the container element
      MostSelling.appendChild(div);
    });
  });
  // alldealsSwiper 
  fetch('../assets/data/ab.json')
  .then(response => response.json())
  .then(data => {
    // Get the container element
    const alldeals = document.getElementById('alldeals');
    // Loop through the array and create HTML elements
    data.products.forEach(obj => {
      // Create a div element for each object
      const div = document.createElement('div');
      div.classList.add('col-xxl-3','col-xl-4','col-lg-4','col-md-6','col-sm-6','col-6');
      div.innerHTML = `
      <div class="card TodaysBestDeals_card m-auto">
              <img
                src=${obj.img}
                class="TodaysBestDeals_bg_img"
                alt=${obj.altr}
              />
              <img
                src="/assets/img/heart.png"
                alt=""
                class="TodaysBestDeals_heart_on_img"
              />
              <div class="card-body bg_grey">
                <div class="d-flex fdircol">
                  <h5 class="card-title me-auto">${obj.title}</h5>
                  <h5 class="card-title fw-bold fst-italic">${obj.price}</h5>
                </div>

                <p class="card-text mb_02rem">${obj.discription}</p>
                <div>
                  <img
                    src="/assets/img/RatingGreen.png"
                    alt=""
                    class="rating"
                  />
                  <span class="rating_count"> (121)</span>
                </div>
                <a
                  href="/"
                  class="btn btn-outline-dark rounded-pill mt-2 btn_transperent"
                >
                  Add to cart
                </a>
              </div>
            </div>
          `;

      // Append the div to the container element
      alldeals.appendChild(div);
    });
  });

  
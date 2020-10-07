const products = [
  {
    title: "Giàn thuỷ canh chữ A",
    content:
      "Giàn thủy canh chữ A với thiết kế kiểu lắp ghép đơn giản. Chỉ cần bỏ ra 30 phút là bạn sẽ có ngay một giàn rau thủy canh sạch tại nhà dành cho gia đình. Giàn thiết kế 4 tầng, 8 ống, chiều dài 2 mét, 3 mét, 4 mét… tùy theo không gian mà quý khách có thể sử dụng mẫu giàn phù hợp. Kiểu giàn trồng chữ A được thiết kế 4 tầng cân đối, linh hoạt, khoảng cách các cây trồng khoa học, không bị che khuất nhau. Như vậy, dù ánh nắng chiếu xiên hay thẳng đứng thì rau trồng đều nhận được đầy đủ ánh nắng cho quá trình quang hợp, giúp cây sinh trưởng phát triển tốt hơn.",
    img: "./images/products/1.jpg",
    thumb: "./images/products/thumb/1.jpg",
    type: "outside",
  },
  {
    title: "Giàn thuỷ canh trải ngang",
    content:
      "Mô hình trồng rau thủy canh kiểu trải ngang đón nắng tối đa giúp cho cây trồng có nhiều ánh sáng để quang hợp làm cho cây trồng phất triển tốt nhất so với các mô hình trồng rau thủy canh khác. Giàn thủy canh này không phân tầng nên toàn bộ rau đều đón được ánh nắng mặt trời giúp cây rau quang hợp tốt nhất và cho năng suất tốt nhất.",
    img: "./images/products/2.jpg",
    thumb: "./images/products/thumb/2.jpg",
    type: "outside",
  },
  {
    title: "Giàn thuỷ canh trong nhà (trắng)",
    content:
      "Mô hình thuỷ canh dạng tủ được đặt trong nhà với hệ thống đèn led để canh tác. Nhờ có ánh sáng 24/24h mà năng suất của trang trại thủy canh đèn led vô cùng vượt trội. Thiết kế nhỏ gọn, đẹp hơn, không chỉ ứng dụng trồng cây mà còn làm đẹp khu vườn thủy canh của bạn. Ở mỗi giai đoạn nhất định, cây thủy canh cần những màu ánh sáng khác nhau để phát triển. Nếu dùng đèn natri hoặc đèn huỳnh quang thông thường bạn chỉ dùng được ở một giai đoạn nhất định. Đèn led trồng rau thủy canh có thể có cả chùm màu nhờ đầu lọc để cung cấp quang phổ chính xác cho từng cây trồng và từng giai đoạn của mỗi cây.",
    img: "./images/products/8.jpg",
    thumb: "./images/products/thumb/3.jpg",
    type: "inhome",
  },
  {
    title: "Giàn thuỷ canh 1/2 chữ A",
    content:
      "Giàn trồng rau thủy canh 1/2 chữ A với kích thước tương đối, được thiết kế nhỏ gọn nên kiểu giàn này phù hợp với nhiều không gian như: sân vườn nhỏ trước nhà, hay ban công, sân thượng. Giàn trồng được xây dựng theo kiểu chữ 1/2 A với từng tầng cây, ống thủy canh sắp xếp theo hình bậc thang. Như vậy, dù ánh nắng chiếu xiên hay thẳng đứng thì rau trồng đều nhận được đầy đủ ánh nắng cho quá trình quang hợp.",
    img: "./images/products/4.jpg",
    thumb: "./images/products/thumb/4.jpg",
    type: "outside",
  },
  {
    title: "Giàn thuỷ canh trong nhà (đen)",
    content:
      "Mô hình thuỷ canh dạng tủ được đặt trong nhà với hệ thống đèn led để canh tác. Nhờ có ánh sáng 24/24h mà năng suất của trang trại thủy canh đèn led vô cùng vượt trội. Thiết kế nhỏ gọn, đẹp hơn, không chỉ ứng dụng trồng cây mà còn làm đẹp khu vườn thủy canh của bạn. Ở mỗi giai đoạn nhất định, cây thủy canh cần những màu ánh sáng khác nhau để phát triển. Nếu dùng đèn natri hoặc đèn huỳnh quang thông thường bạn chỉ dùng được ở một giai đoạn nhất định. Đèn led trồng rau thủy canh có thể có cả chùm màu nhờ đầu lọc để cung cấp quang phổ chính xác cho từng cây trồng và từng giai đoạn của mỗi cây.",
    img: "./images/products/9.jpg",
    thumb: "./images/products/thumb/5.jpg",
    type: "inhome",
  },
  {
    title: "Giàn thuỷ canh dạng đứng",
    content: "Mô hình thuỷ canh dạng đứng (ngoài trời)",
    img: "./images/products/6.jpg",
    thumb: "./images/products/thumb/6.jpg",
    type: "outside",
  },
];

function loadProducts(products, type = "all", start = 0, end = 0) {
  let ourProduct = "";
  const arr = end > 0 ? products.slice(start, end) : products;
  for (const product of arr) {
    let content = "";
    if (type === "featured") {
      content = `<h5 class="card-title">${product.title}</h5>
                  <p class="card-text">${
                    product.content.length > 200
                      ? product.content.substr(0, 200) + "..."
                      : product.content
                  }</p>`;
    } else {
      content = `<h5 class="card-title card-title-custom">${product.title}</h5>`;
    }

    ourProduct += `
      <div class="col-12 col-sm-8 col-md-6 col-lg-4 mt-4">
        <div class="card product" style="width: 18rem">
          <img src="${product.thumb}" class="card-img-top" alt="${product.title}" loading="lazy" />
          <div class="card-body">
            ${content}
            <a class="spotlight btn btn-outline-success"
              href="${product.img}" 
              data-description="${product.content}">
              Chi tiết
            </a>
          </div>
        </div>
      </div>`;
  }
  return ourProduct;
}

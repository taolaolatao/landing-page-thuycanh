const products = [
  {
    title: "Cải Ngọt",
    content:
      "Trong thành phần cải ngọt có chứa hàm lượng chất xơ lớn, cùng với các vitamin K, lipit,...bổ sung cho cơ thể dưỡng chất bảo vệ hệ tiêu hóa, nhất là ngăn ngừa táo bón tốt. Đồng thời chống các bệnh về tim mạch. Hỗ trợ chống loãng xương, giúp xương chắc khỏe. Giúp cơ thể ngăn ngừa các loại ung thư, hiệu quả nhất là ung thư phổi và ung thư tá tràng. Phòng và chữa bệnh gout, trĩ, xơ gan. Tăng sức đề kháng, giải nhiệt cơ thể.",
    img: "./images/products/1.jpg",
  },
  {
    title: "Cải Bẹ Xanh (Cải Cay)",
    content:
      "Cải Bẹ Xanh là bài thuốc thân thiện để chữa các chứng: viêm họng, ho hen, mụn nhọt, trĩ, các chứng phong hàn,  giảm đau họng, điều trị bệnh gout, giúp thải ra ngoài chất axit uric, phòng trừ bệnh rất hiệu quả. Ngoài ra, cải bẹ còn chứa hàm lượng vitamin khá cao, cung cấp nhiều axit folic cần thiết cho tế bào máu. Mỗi ngày dùng 200 – 300g rau cải bẹ trong khẩu phần ăn có thể duy trì được sự tươi trẻ cho làn da.",
    img: "./images/products/2.jpg",
  },
  {
    title: "Cải Thìa",
    content:
      "Cải thìa tốt cho phụ nữ mang thai, có tác dụng phòng ngừa khuyết tật cho thai nhi, giúp xương chắc khỏe, có khả năng kích thích nhịp tim hoạt động tốt và hạ huyết áp. Làm chậm quá trình lão hóa và giảm đáng kể việc hình thành các gốc tự do, phòng ngừa bệnh đục nhân mắt và thoái hóa hoàng điểm ở mắt. Trị các bệnh như lợi tiểu, giảm sưng phù, có tác dụng ngăn ngừa ung thư. Hạt cải dùng làm thuốc trị tiêu đờm, thông kinh mạch, kháng viêm, ho.",
    img: "./images/products/3.jpg",
  },
  {
    title: "Cải Ngồng",
    content:
      "Cải ngồng rất giàu chất xơ và chứa nhiều loại vitamin A, B1, B2, B3, B5, B6, C, K... bổ sung dưỡng chất cho da, góp phần giúp cho đôi mắt của bạn thêm sáng và khỏe mạnh. Cải ngồng cũng chứa nhiều chất nhầy và chất xơ giúp gia tăng nhu động ruột, kích thích hệ bài tiết và hỗ trợ gan hoạt động mạnh mẽ hơn. Đặc biệt là cải ngồng sẽ kéo dài tuổi thọ và giảm nguy cơ bệnh tim, kích thích tuần hoàn lưu thông máu và ổn định huyết áp, cho bạn một trái tim khỏe mạnh.",
    img: "./images/products/4.jpg",
  },
  {
    title: "Xà Lách",
    content:
      "Rau xà lách giúp thanh nhiệt, điều trị một số bệnh như táo báo và có tác dụng ngăn ngừa ung thư, viêm khớp, tim mạch… Rau xà lách có thể đáp ứng được một lượng dưỡng chất cần thiết cho cơ thể trong hoạt động hằng ngày như vitamin và khoáng chất. Có khả năng chống oxy hóa mạnh mẽ, giúp xương chắc khỏe và tốt cho răng miệng, hỗ trợ sự hoạt động của hệ thần kinh và quá trình tái tạo máu, bảo vệ sức khỏe của đôi mắt. Phụ nữ mang thai ăn rau xà lách để cả hai mẹ con cùng được khỏe mạnh.",
    img: "./images/products/5.jpg",
  },
  {
    title: "Card Title",
    content: "Some quick example text to build on the card title and make up",
    img: "./images/products/6.jpg",
  },
  {
    title: "Card Title",
    content: "Some quick example text to build on the card title and make up",
    img: "./images/products/7.jpg",
  },
  {
    title: "Card Title",
    content: "Some quick example text to build on the card title and make up",
    img: "./images/products/8.jpg",
  },
  {
    title: "Card Title",
    content: "Some quick example text to build on the card title and make up",
    img: "./images/products/9.jpg",
  },
  {
    title: "Card Title",
    content: "Some quick example text to build on the card title and make up",
    img: "./images/products/10.jpg",
  },
  {
    title: "Card Title",
    content: "Some quick example text to build on the card title and make up",
    img: "./images/products/11.jpg",
  },
  {
    title: "Card Title",
    content: "Some quick example text to build on the card title and make up",
    img: "./images/products/12.jpg",
  },
];

function loadProducts(products, start = 0, end = 0) {
  let ourProduct = "";
  const arr = end > 0 ? products.slice(start, end) : products;
  for (const product of arr) {
    ourProduct += `
      <div class="col-12 col-sm-8 col-md-6 col-lg-4 mt-4">
        <div class="card product" style="width: 18rem">
          <img src="${product.img}" class="card-img-top" alt="${product.title}" loading="lazy" />
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.content}</p>
          </div>
        </div>
      </div>`;
  }
  return ourProduct;
}

var imgs = ["images/main/image-1.jpg","images/main/image-2.jpg","images/main/image-3.jpg"];
var currentIndex = 0;
 function showImage(index) {
     var image = document.getElementById('img1');
     image.src = imgs[index];
 }

 function next_Click() {
     currentIndex++;
     if (currentIndex>=imgs.length){
         currentIndex = 0;
     }
     showImage(currentIndex);
 }
function prev_Click() {
    currentIndex--;
    if (currentIndex < 0){
        currentIndex=imgs.length-1;
    }
    showImage(currentIndex);
}

 //     ### phần html Tạo 1 thẻ div trong đó có 1 thẻ img ( chọn ảnh bất kỳ trong các ảnh cần chuyển động)  trong thẻ này phải tạo id và src đến vị trí của ảnh
 //     ** Tạo thêm 2 button next và pre
 //     ### Phần javascript
 //     ** Cơ bản : chuyển đổi hình ảnh khi click vào button
 //     * tạo 1 mảng chứa đường dẫn các ảnh. ví dụ mảng tên images = ["a.png","b.png","c.png"] lưu ý đây chỉ là ví dụ khi áp dụng vào bài của mình bạn nên để đường dẫn đầy đủ từ folder, ví dụ ảnh bạn trong folder image thì src= image/a.png
 //         * tạo 1 biến mang ý nghĩa là chỉ số hiện tại của ảnh đang được hiển thị. ví dụ currenIndex = 0
 //         * tạo 1 function để hiển thị hình ảnh (ví dụ:  function showImage(index) {})  khi chuyển đổi, Hàm này nhận vào chỉ số của ảnh sau khi click vào button
 //     trong này tạo 1 biến để truy cập đến thẻ img hiện tại. ví dụ thẻ img có id = imgs. var imgs = document.etElementById("imgs")
 //     gán giá trị cho thuộc tính src của img dựa vào chỉ số hiện tại. ví dụ mảng của bạn có 3 ảnh, và chỉ số hiện tại = 2. imgs.src = images[2]
 //         * Taọ 1 function cho nút next
 //     trong này đầu tiên bạn sẽ tăng 1 đơn vị cho giá trị hiện tại cho biến currenIndex
 //     kiểm tra xem giá trị hiện tại có lớn hơn hoặc bằng chiều dài mảng không, nếu có set currenIndex =0
 //     Nếu không gọi function showImage(index) với tham số truyền vào là currenIndex, tức là bạn sẽ thay currenIndex  vào vị trí của index khi gọi hàm
 //     * Tạo 1 function cho nuts pre
 //     trong này đầu tiên bạn sẽ giảm 1 đơn vị cho giá trị hiện tại cho biến currenIndex
 //     kiểm tra xem giá trị hiện tại có <0 không, nếu có set currenIndex = chiều dài mảng -1
 //     Nếu không gọi function showImage(index) với tham số truyền vào là currenIndex, tức là bạn sẽ thay currenIndex  vào vị trí của index khi gọi hàm
 //     * Cuối cùng băt ssuwj kiện cho các nút ở đây có rất nhiều cách, tôi sẽ gợi ý cho bạn
 //     1. gán trực tiếp sự kiện khi tạo button trong html. ví dụ <button id="nextBtn" onclick="tên function(ví dụ:clicknext{};">&gt;</button>
 //     2. Tạo biến truy cập đến button và gán sự kiện cho biến đó = addEventListener vị dụ gán sự kiện click cho nút next  var nextBtn = document.getElementById("nextBtn");
 //     nextBtn.addEventListener("click", tên function cần gán);
 // ** Nâng cao: sau khi thực hiện các bueocs trên bạn có thể nâng cấp bài làm bằng cách thêm hiệu ứng tự chuyển ảnh, ở đây tôi lấy thời gian tự chuyển ảnh sẽ là 15 giây
 //     * Tạo hàm gọi đến hàm setInterval cuả javascript. Hàm này sử dụng để lặp lại 1 hành động j đó, ví dụ tôi muốn lặp lại hành động chuyển ảnh mà không cần click vào button next
 //     setInterval(tên hàm,<thời gian với tôi sẽ là 15000 tức là cứ sau 15 giây sẽ thực hiện 1 lần chuyển ảnh>);
 //     hãy nhớ gọi đến hàm vừa tạo vị dụ tôi tạo hàm Interval
 //     thì tôi sẽ gọi Interval(); để hàm sẽ tự động thực hiện sau khi tôi load trang của mình
 //     nếu bạn muốn dừng việc tự chuyển trang thì có thể tạo thêm 1 hàm stopInterval trong đó bạn dùng câu clearInterval(setInterval(tên hàm,15000)); để dừng chuyển trang tự động nhớ gọi tới khi bạn muốn dùng, 1 khi bạn gọi tới hàm này thì hàm Interval của bạn sẽ vô hiệu không tự động chuyển trang nữa.
 //
 //         LƯU Ý đÂY CHỈ LÀ HƯỚNG DẪN VÍ DỤ KHI BẠN ÁP DỤNG VÀO BẠN CỦA BẠN NẾU NÓ KHÔNG HIỆU QUẢ NHỚ XEM KỸ VÀ CHỈNH SỬA LẠI

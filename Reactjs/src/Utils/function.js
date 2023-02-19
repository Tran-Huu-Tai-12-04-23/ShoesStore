// Tạo một đối tượng XMLHttpRequest để gọi API bằng AJAX
var xhr = new XMLHttpRequest();

// Khai báo một biến để lưu trữ kết quả từ API
var cachedResult = null;

// Tạo một hàm để lấy dữ liệu từ API
export const getDataFromApi = (type) => {
    // Kiểm tra xem kết quả đã được lưu trữ trong bộ đệm chưa
    if (cachedResult) {
        // Nếu có, trả về kết quả đó
        return Promise.resolve(cachedResult);
    } else {
        // Nếu chưa, thực hiện gọi API bằng AJAX
        xhr.open('GET', `https://provinces.open-api.vn/api/${type}`);

        return new Promise(function (resolve, reject) {
            xhr.onload = function () {
                if (xhr.status === 200) {
                    // Lưu trữ kết quả vào bộ đệm để sử dụng lại sau này
                    cachedResult = xhr.response;
                    // Trả về kết quả
                    resolve(xhr.response);
                } else {
                    reject(xhr.statusText);
                }
            };
            xhr.onerror = function () {
                reject(xhr.statusText);
            };
            xhr.send();
        });
    }
};
export const convertVNseToEnglish = (str) => {
    if (str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
        str = str.replace(/đ/g, 'd');
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
        str = str.replace(/Đ/g, 'D');
        return str;
    } else return '';
};

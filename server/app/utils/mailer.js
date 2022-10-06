const nodeMailer = require('nodemailer');
const config = require('../../config/config');


const sendMail = (to, subject, htmlContent) => {
    // Khởi tạo một thằng transporter object sử dụng chuẩn giao thức truyền tải SMTP với các thông tin cấu hình ở trên.
    const transporter = nodeMailer.createTransport({
      host: config.mail.host,
      port: config.mail.port,
      secure: false, // nếu các bạn dùng port 465 (smtps) thì để true, còn lại hãy để false cho tất cả các port khác
      auth: {
        user: config.mail.user,
        pass: config.mail.pass
      }
    });
    const options = {
      from: config.mail.user, // địa chỉ admin email bạn dùng để gửi
      to: to, // địa chỉ gửi đến
      subject: subject, // Tiêu đề của mail
      html: htmlContent // Phần nội dung mail mình sẽ dùng html thay vì thuần văn bản thông thường.
    };
    // hàm transporter.sendMail() này sẽ trả về cho chúng ta một Promise
    return transporter.sendMail(options);
};
  
module.exports = {
    sendMail
  }
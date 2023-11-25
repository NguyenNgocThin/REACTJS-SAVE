import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">Nghe nhạc đi người anh em</div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              width="500px"
              height="300px"
              src="https://www.youtube.com/embed/6Edc6xxV93M"
              title="Sơn Tùng MTP - Remember Me (SlimV 2017 Mix)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="content-right">
            <p>
            Câu ca nhẹ giăng đời ta Âm thanh nào trôi vụt xa Không gian này đâu
            có chắc cho ta trả lời được hết dư âm những ngày qua Buông lơi trôi
            theo cây viết thả hồn theo làn mây buông xuôi hay nên đi tiếp đôi
            chân dường như mất thăng bằng Tương lai vĩnh hằng quên đi cơn mơ tan
            trong hư vô ảo Lang thang cô đơn mình tôi bước Tương lai cô đơn mình
            tôi ước Đêm đen ngày qua cùng mưa rơi phôi pha lạnh căm ta nào đâu
            có biết trước Ngã gục ư hình như là hơi vội Nỗi niềm tôi đã làm gì
            nên tội Những chỉ trích dày xéo nhiều thêm họ đã quy chụp một từ là
            chơi trội Có những đêm dài sầu hoen làn mi buồn lệ rơi nhòe phai
            gắng gượng tôi cầm bút Cánh tay run rẩy gồng tâm hồn tan chảy kiếm
            tìm cảm xúc dù chỉ là một chút Nhắm mắt cô độc trơ trọi nơi đâu cho
            tôi yên bình dù chỉ là một phút Thoát xác giữa ngàn khơi thấy thương
            mình chơi vơi có lẽ nên thả lỏng con tim thôi Ở đâu đó phía cuối con
            đường kia nước mắt thôi ngừng trôi Ở đâu đó phía cuối chân trời kia
            ánh sáng đang chờ tôi Đập tan đi trái tim lạnh băng Ở đâu đó sẽ có
            người đợi trông dang tay ôm lấy thân này ai ôm lấy thân này Có lẽ
            tôi đã tìm được giấc mơ yên bình giải thoát cho tâm hồn tôi Gồng bao
            nhiêu vết thương giờ tôi là tôi Ba mẹ tin mày em trai tin mày Luôn
            dõi theo từng bước chân mày niềm vinh quang tự hào của gia đình này
            Có những đêm mẹ mày khóc Ba thương mày đến bạc tóc Động lực đó không
            cho phép mày chùn bước trốn chạy đâu hỡi thằng ngu kia Đứng dậy đi
            mạnh mẽ cứng rắn đứng lên vượt qua thất bại sống chung với những
            điều không thể thay đổi Biến tất cả trở thành vô hại nào thức tỉnh
            đi Bật tung xiềng xích đốt cháy hết đam mê và thể xác quay lưng dang
            tay ôm trọn bầu trời yêu thương nhìn lại chặng đường để thấy mình là
            ai Tương lai ngày mai sầu lo trên bờ vai đường muôn lối phân vân về
            đâu Đam mê tìm ta lời ca mang ngày qua vùi chôn hết suy tư chìm sâu
            Cảm ơn tất cả chướng ngại Cảm ơn mọi sự thất bại Đã tạo nên một con
            tim bất diệt trên bầu trời ngày hôm nay
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);

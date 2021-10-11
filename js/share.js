const url="https://jeeewon.github.io/ItemTest/";

function setShare(){
    var resultImg = document.querySelector('#resultImg');
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = '������ �׽�Ʈ ���';
    const shareDes = infoList[resultAlt].name;
    const shareImage = url+'img/resultimage-'+resultAlt+'.png';
    const shareURL = url + 'page/result-'+resultAlt+'.html';
}
function kakaoShare(){
    Kakao.API.request({
        url: '/v2/api/talk/memo/default/send',
        data: {
          template_object: {
            object_type: 'feed',
            content: {
              title: 'īī���� ��ũ 4.0',
              description: '����Ʈ ���ø� FEED',
              image_url:
                'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
              link: {
                web_url: 'https://developers.kakao.com',
                mobile_web_url: 'https://developers.kakao.com',
              },
            },
            item_content: {
              profile_text: 'Kakao',
              profile_image_url: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
              title_image_url: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
              title_image_text: 'Cheese cake',
              title_image_category: 'Cake',
              items: [
                {
                  item: 'Cake1',
                  item_op: '1000��',
                },
                {
                  item: 'Cake2',
                  item_op: '2000��',
                },
                {
                  item: 'Cake3',
                  item_op: '3000��',
                },
                {
                  item: 'Cake4',
                  item_op: '4000��',
                },
                {
                  item: 'Cake5',
                  item_op: '5000��',
                },
              ],
              sum: 'Total',
              sum_op: '15000��',
            },
            social: {
              like_count: 100,
              comment_count: 200,
            },
            button_title: '�ٷ� Ȯ��',
          },
        },
        success: function(response) {
          console.log(response);
        },
        fail: function(error) {
          console.log(error);
        },
      });
}
// informationホバー時の記事のプルダウン機能
$(function(){
  $(".info1, .kiji-down").hover(function(){
    $(".kiji-down").not(":animated").addClass("kiji-active");
  },function(){
    $(".kiji-down").removeClass("kiji-active");
  });

  $(".info1, .kiji-down, .kiji-box").hover(function(){
    $(".kiji-down").not(":animated").removeClass("kiji-non");
  },function(){
    $(".kiji-down").addClass("kiji-non");
  });
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝


// 非同期のコメント投稿時の残ったテキスト等の削除機能
  $("#f_submit").click(function(){
    setTimeout(function(){
      $("#f_nickname").val("")
      $("#f_comment").val("")
    },100);
  });
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝


// 記事をクリックした際の記事を非同期出力
  $(".kiji").click(function(){

    function blogHTML(data){

      let blog = `<div class="blog-title">${data.title}</div>
                  <div class="blog-text">${data.text}</div>`
      return blog;
    }

    function videoHTML(data){

      let video = `<iframe src="${data.video_url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscree class="video"></iframe>`
      return video;
    }

    let Index = $(".kiji").index($(this))
    let id = $(".kiji").eq(Index).data("id");

    $.ajax({
      data: { kiji_id: id},
      url: "/mains/kiji_get",
      Type: "GET",
      dataType: "json"
    })

    .done(function(data){
      let blog = blogHTML(data)
      let video = videoHTML(data)

      // $(".blog-main").empty()
      $(".youtube").empty()

      $(".blog-main").html(blog)
      $(".youtube").append(video)

      $("#blog_id").val(data.id)
    })

    .fail(function(){
      alert("萎え")
    });
  });
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝


// 記事をクリックした際のコメントを非同期出力
  $(".kiji").click(function(){

    function commentHTML(data){
      let comment = `<div class="comment-info">
                        <p class="comment-name">${data.nickname}</p>
                        <p class="comment-time">${data.created_at}</p>
                      </div>
                      <div class="comment-text">${data.comment}
                      </div>`
      return comment;
    }

    var Index = $(".kiji").index($(this))
    var id = $(".kiji").eq(Index).data("id");

    $.ajax({
      data: { kiji_id: id},
      url: "/mains/comment_get",
      Type: "GET",
      dataType: "json"
    })

    .done(function(data){
      $(".comments").empty()

      data.forEach(function(comments){
        let comment = commentHTML(comments)
        $(".comments").append(comment)
        
      })
      
    })

    .fail(function(){
      alert("萎え")
    });
  });
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝


// コメントの位置までスクロールダウン
  var top = $("#comment-link").offset().top;
  $(".info3").click(function(){
    $("html,body").animate({
        scrollTop : top
    }, {
        queue : false
    });
  });
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝


// カレンダークリック時にその記事の出力
  $(".dates").click(function(){

    function blogHTML(data){

      let blog = `<div class="blog-title">${data.title}</div>
                  <div class="blog-text">${data.text}</div>`
      return blog;
    }

    function videoHTML(data){

      let video = `<iframe src="${data.video_url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscree class="video"></iframe>`
      return video;
    }
    
    let date = this.id
    let year = $(".year").data("year")
    let create_at = year + date
    
    $.ajax({
      data: {date: create_at},
      dataType: "json",
      url: "/mains/dates",
      type: "GET"
    })

    .done(function(datas){
      $(".youtube").empty()
      

      datas.forEach(function(data){
        let blog = blogHTML(data)
        let video = videoHTML(data)

        // $(".blog-main").empty()
        $(".youtube").append(video)
        $(".blog-main").html(blog)
        $("#blog_id").val(data.id)
      })
    })

    .fail(function(data){
      alert("記事が見つかりませんでした")
    });
  });



  $(".dates").click(function(){

    function commentHTML(data){
      let comment = `<div class="comment-info">
                        <p class="comment-name">${data.nickname}</p>
                        <p class="comment-time">${data.created_at}</p>
                      </div>
                      <div class="comment-text">${data.comment}
                      </div>`
      return comment;
    }

    let date = this.id
    let year = $(".year").data("year")
    let create_at = year + date
    
    $.ajax({
      data: {date: create_at},
      dataType: "json",
      url: "/mains/dates_comment",
      type: "GET"
    })

    .done(function(data){
      console.log(data)
      $(".comments").empty()

      data.forEach(function(comments){
        let comment = commentHTML(comments)
        $(".comments").append(comment)
        
      })
    })

    .fail(function(data){
      console.log(data)
      alert("萎え")
    });
  });
});





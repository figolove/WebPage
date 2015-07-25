$(function() {
    $( "#sortable" ).sortable();

    //µ¼º½-ËÑË÷
    $("#searchTerm").on("focus", function () {
        $("#searchDlg").css("display", "block");
        $(this).animate({width: '300px'}, "fast");
        $(this).next().find("em").remove();
        $(this).next().find("button").append('<em class="glyphicon glyphicon-edit"></em>');
        $(this).next().append('<button type="button" class="btn"><em class="glyphicon glyphicon-remove"></em></button>');
    });
    $("#searchTerm").on("blur", function () {
        $("#searchDlg").css("display", "none");
        $(this).animate({width: '170px'}, "fast");
        $(this).next().find("button").remove();
        $(this).next().append('<button type="button" class="btn"><em class="glyphicon glyphicon-search"></em></button>');

    });

    var $clickBefore = $(".click-before");
    var $clickAfter = $(".click-after");
    var $modalTitle = $("#modalTitle");
    var $ta = $("#ta");

    $modalTitle.on("click",function(){
        $clickAfter.removeClass("hidden");
        $clickBefore.removeClass("hidden").addClass("hidden");
        var title = $modalTitle.text();
        $ta.val(title);
    });
    $("#btnSave,#btnClose").on("click",function(){
        $clickBefore.removeClass("hidden");
        $clickAfter.removeClass("hidden").addClass("hidden");
    });
    $("#btnSave").on("click",function(){
        var title1 = $ta.val();
        $modalTitle.text(title1);
    });


    function runEffect() {
        var selectedEffect = $( "#effectTypes" ).val();
        var options = {};
        if ( selectedEffect === "scale" ) {
            options = { percent: 0 };
        } else if ( selectedEffect === "size" ) {
            options = { to: { width: 200, height: 60 } };
        }
        $( "#effect" ).toggle( selectedEffect, options, 500 );
    };
    $( "#addMembers" ).click(function() {
        runEffect();
    });

    $(function (){
        $("[data-toggle='popover']").popover();
    });


   /* $('#addMember').on('shown.bs.popover', function () {
        var $this =  $(this),
            ariaDescribedby = $this.attr('aria-describedby'),
            $popoverDiv = $('#' + ariaDescribedby),
            $popoverContent = $('.popover-content',$popoverDiv);

        $popoverContent.empty();

            var $spanDiv = $('<div>'),
            $span = $('<span>Members</span>'),
            $inputDiv = $('<div>'),
            $input = $('<input id="search" type="text" placeholder="Search members">'),
            $btnDiv1 = $('<div>'),
            $btnSpan1 = $('<span>');

        $btnSpan1.text('allen(allen367)').addClass('btn btn-primary add-mem');

        $btnDiv1.append($btnSpan1);

        $popoverContent.append($btnDiv1);

        $btnSpan1.on('click')
    });*/

    $("#addMember").on('shown.bs.popover', function () {
        $(".add-mem").on("click",function(){
            var text = $(this).text();
            var hm = $("#addMemShow").html();
            $("#addMemShow").html(hm + '<p class="memP">'+text+'<p>');
            $('.memP').on('click',function(){
                $(this).hide();
            });
        });

        var availableTags = [
            "allen",
            "thomas"
        ];
        $( "#search" ).autocomplete({
            source: availableTags
        });

    });

    $("#addCL").on('shown.bs.popover', function () {
        $("#addCheckList").on("click",function(){
            var checkListName =  $("#clInput").val();
                $content = $('#listShow');
            $content.attr({style: "border:1px solid #f6f6f6;margin: 10px"});

            var $div = $('<div>'),
                $div1 = $('<div>'),
                $strong = $('<strong>'+checkListName+'</strong>'),
                $a1 = $('<a class="btn hide-on-edit quiet js-confirm-delete del-id" href="#" style="float: right">Delete</a>'),
                $div2 = $('<div>'),
                $div21 = $('<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">0%</div>'),
                $a2 = $('<div><a id="addItem" class="hide-on-edit quiet js-confirm-delete" href="#">Add an item</a></div>');


            $div2.addClass("progress");

            $div1.append($strong,$a1);
            $div1.append($a1);
            $div2.append($div21);

            $div.append($div1);
            $div.append($div2);
            $div.append($a2);
            $content.append($div);


            $('.del-id').on('click',function(){
                $div = $(this).parent().parent();
                $div.remove();
            });

            $('#addItem').on('click',function(){
                var html = '<div class="click-after2" style="width: 500px;"><textarea class="ta" placeholder="Add an item"></textarea><button class="btn btn-success btn-lg btn-add" id="btnAdd">Add</button><button class="btn btn-close"><em class="glyphicon glyphicon-remove"></em></button></div>';
                $(this).before(html);
                $('#btnAdd,.btn-close').on('click',function(){
                    $('.click-after2').hide();
                });
                $('#btnAdd').on('click',function(){
                   var textarea =  $(this).prev().val();
                    $('#addItem').parent().before('<input type="checkbox" name="item">'+textarea);
                });

            });
        });
    });

    $("#dueDateDlg").hide();
    $("#addDD").on("click",function(){
        $("#dueDateDlg").toggle();
    });


    //activity commmet
    $('#commentBtn').on('click',function(){
        var comment = $('#commentText').val();
        $('#jsListActions').after('<div><h4>allen</h4><div class="current-comment"><p style="border-radius:5px;padding-left: 30px;box-shadow: 3px 3px 10px #f6f6f6;">'+comment+'</p></div><span class="time1"></span>-<u><a>Edit</a></u>-<u><a>Delete</a></u><br/><hr/></div>');
        $('.time1').text(new Date().toLocaleString());
    });

    $('#showMenu').on('click',function(){
        $("#menu").animate({right:'0px'});
    });

    $('#closeMenu').on('click',function(){
        $("#menu").animate({right:'-300px'});
    });

  /*  $('#addList').on('click',function(){
       $('#sortable').prepend('<div class="col-md-3 board-item"><div class="list-group"><ul><li class="list-group-item"><div class="row"><div class="col-md-8"><h2>Published</h2></div><div class="col-md-4 text-right"><div class="dropdown"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style="border: none"><em class="glyphicon glyphicon-circle-arrow-down"></em></button><ul style="padding-left: 10px" class="dropdown-menu" aria-labelledby="dropdownMenu1"><li><a href="#"><span class="pop-over-header-title js-fill-pop-over-title">List Actions</span></a></li><li><a href="#"><ul class="pop-over-list"><li><a href="#" class="js-add-card">Add Card¡­</a></li><li><a href="#" class="js-copy-list">Copy List¡­</a></li><li><a href="#" class="js-move-list">Move List¡­</a></li><li><a href="#" class="highlight-icon js-list-subscribe">Subscribe </a></li></ul></a></li><li><a href="#"><ul class="pop-over-list"><li><a href="#" class="js-move-cards">Move All Cards in This List¡­</a></li><li><a href="#" class="js-archive-cards">Archive All Cards in This List¡­</a></li></ul></a></li><li><a href="#" class="js-close-list">Archive This List</a></li></ul></div></div></div></li></ul></div></div>');
    });*/

    /*$modalTitle.on("click",function(){
        $clickAfter.removeClass("hidden");
        $clickBefore.removeClass("hidden").addClass("hidden");
        var title = $modalTitle.text();
        $ta.val(title);
    });
    $("#btnSave,#btnClose").on("click",function(){
        $clickBefore.removeClass("hidden");
        $clickAfter.removeClass("hidden").addClass("hidden");
    });
    $("#btnSave").on("click",function(){
        var title1 = $ta.val();
        $modalTitle.text(title1);
    });*/

    $clickBefore2 = $('.click-before2');
    $clickAfter2 = $('.click-after2');
    $('#addList').on('click',function(){
        $clickAfter2.removeClass("hidden");
        $clickBefore2.removeClass("hidden").addClass("hidden");
    });

    $('#listClose,#listSave').on('click',function(){
        $clickBefore2.removeClass("hidden");
        $clickAfter2.removeClass("hidden").addClass("hidden");
    });

    $('#listSave').on('click',function(){
        var listName = $('.list-name-input').val();
        $('#sortable').prepend('<div class="col-md-3 board-item"><div class="list-group"><ul><li class="list-group-item"><div class="row"><div class="col-md-8 click-del"><h2>'+listName+'</h2></div><div class="col-md-4 text-right"><div class="dropdown"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style="border: none"><em class="glyphicon glyphicon-circle-arrow-down"></em></button><ul style="padding-left: 10px" class="dropdown-menu" aria-labelledby="dropdownMenu1"><li><a href="#"><span class="pop-over-header-title js-fill-pop-over-title">List Actions</span></a></li><li><a href="#"><ul class="pop-over-list"><li><a href="#" class="js-add-card">Add Card¡­</a></li><li><a href="#" class="js-copy-list">Copy List¡­</a></li><li><a href="#" class="js-move-list">Move List¡­</a></li><li><a href="#" class="highlight-icon js-list-subscribe">Subscribe </a></li></ul></a></li><li><a href="#"><ul class="pop-over-list"><li><a href="#" class="js-move-cards">Move All Cards in This List¡­</a></li><li><a href="#" class="js-archive-cards">Archive All Cards in This List¡­</a></li></ul></a></li><li><a href="#" class="js-close-list">Archive This List</a></li></ul></div></div></div></li></ul></div></div>');
    });

    $(".click-del").on('click',function(){
       $(this).parent().parent().parent().parent().parent().hide();
    });
});

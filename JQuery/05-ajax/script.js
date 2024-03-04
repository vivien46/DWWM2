$(function(){

    /*
        JQuery permet de faire l'ajax via 3 méthodes
            $.get
            $.post
                - url
                - params (json)
                - function (){}
                - format(xml,text,json)

            $.ajax()
    */

    $.ajax({
        url : 'countries-FR.json',
        method : 'GET', //GET ou POST
        data :{},
        dataType : 'json',
        success : function(datas){
            console.log(datas);
            Object.values(datas).forEach(function(pays){
                $('#contenu').append(pays + '<br>');
            });
        },//reussite
        error : function(error){},// sur Echec
        complete : function(){
            console.log(`C'est fini`);
        },
        beforeSend : function(){
            console.log('ça commence')
        }

    });// avant l'envoi de la requete ajax
   
    //avec $.get()

    $.get('countries-FR.json',{},function(datas){
        console.log(datas);
        Object.values(datas).forEach(datas)
    })
   
   
   
   
   
   
   
    // Ou
    let url = 'contries-FR.json';
    $.ajax(url)
        .done(function(datas){})
        .fail(function(){})
        .always(function(){});

    $.ajax(url,{
        method : 'POST'
    });
});
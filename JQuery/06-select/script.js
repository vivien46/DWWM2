$(function(){

    $.get('CountryCodes.json',{},function(datas){

        for(pays of datas){
            $('#pays').append(`<option data-phone="${pays.dial_code}">${pays.name}</option>`);
        }

        //en JQ
        $('#pays').on('change',function(){

            $('#indicatif').val( $(this).find('option:selected').data('phone') );
        });

        // en js
        // document.querySelector('#pays').addEventListener('change',function(){
        //     document.querySelector('#indicatif').innerHTML = this.options[this.selectedIndex].dataset.phone;
        // });

        
    },'json');
})
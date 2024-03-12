var formm = document.getElementsByTagName('form')[0];
           formm.addEventListener('submit',contact,false);
           function contact(e) {
              e.preventDefault();
        
              var target = e.target || e.srcElement;
              var i = 0;
              var message = '';
        
              for(i = 0; i < target.length; ++i) {
                 if(target[i].type != 'text' && target[i].type != 'textarea') {
                    continue;
                 }
        
                 message += target[i].name + ': ' + target[i].value + "\r\n";
              }
              target.elements["body"].value = message;
        
              this.submit();
           }
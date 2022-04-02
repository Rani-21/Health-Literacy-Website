const scriptURL = 'https://script.google.com/macros/s/AKfycbyd4SKGnuHRASvCNn9lX7l87oHI0TZAr25rK691e7OY01_P4afNyWjnAlNcJpm9pgDKow/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })
<script>
  /* Taken and tweaked from https://github.com/cabreraalex/svelte-flask-example/blob/master/client/src/App.svelte */
  let message = "Click the button below to get the message from Flask!"

  function getMessage() {
    fetch('/hello')
          .then(response => response.text())
          .then(data => {
              message = data
          })
  }

</script>

<style>
  .container {
      display: flex;
      justify-content: space-around;
      align-items: center;
  }

  .container img {
      height: 100px;
  }
</style>

<div class="container">
  <img src="https://flask.palletsprojects.com/en/3.0.x/_images/flask-horizontal.png" alt="Flask Logo">
  <img src="/vite.svg" alt="vite logo">
  <img src="https://raw.githubusercontent.com/sveltejs/svelte/bbd1a6c05adfab2276af92bfe64e45d043bd7b94/sites/svelte.dev/static/svelte-logo.svg" alt="svelte logo">
</div>

<h2>{message}</h2>

<button on:click={getMessage}>Get Message</button>


<script lang="ts">
    function redirect() {
      window.location.href = "/login";
    }
  </script>
  
  <section class="container">
    <div class="login-form">
        <h1>Svelte Kit Demo</h1>
        <button onclick={redirect} style="height: 40px;border-radius: 5px;width: 20vw;color: white; font-size: 20px; background:#1C5EA4;">Start Demo</button>
    </div>
  </section>
  
  <style>
    /* Place styles of your view here */

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .login-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      height: 20vh;
      width: 30vw;
      text-align: center;
      background-color: #f2f2f2;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  </style>


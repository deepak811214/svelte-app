<script>
    import { page } from "$app/stores";
  </script>
  
  <section class="container">
    <h1>List of Emails Registered</h1>
    <ol class="login-form">
      {#each $page.data.users.results as { email, password }}
        <li>
          <div style="font-weight: bold; font-size: 20px">{email}</div>
        </li>
      {/each}
    </ol>
  </section>
  
  <style>
    /* Place styles of your view here */
    .container {
      display: flex;
      align-items: center;
      height: 100vh;
      flex-direction: column;
    }
    .login-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      height: 40vh;
      width: 30vw;
      text-align: center;
      background-color: #f2f2f2;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  </style>


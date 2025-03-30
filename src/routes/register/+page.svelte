<script>
    import { onMount } from "svelte";
    import { page } from "$app/stores";
  
    let email = "";
    let password = "";
  
    async function login() {
      const res = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      const data = await res.json();
      console.log(data)
      if (res.ok) {
        window.location.href = "/dashboard"; // Redirect after login
      } else {
        error = data.error;
      }
    }
  </script>
  <div class="container">
        <form on:submit|preventDefault={login} class="login-form">
            <h2>Register New User</h2>
            <input type="text" style="height: 30px;border-radius: 5px;width: 20vw;" bind:value={email} placeholder="Email" required />
            <input type="password" style="height: 30px;border-radius: 5px;width: 20vw;" bind:value={password} placeholder="Password" required />
            <button type="submit" style="height: 40px;border-radius: 5px;width: 21vw;color: white; font-size: 20px; background:#1C5EA4;">Register</button>
        </form>
  </div>
  
  <!-- <section>
    <h1>Users</h1>
    {#each $page.data.users.results as { email, password }}
      <div>
        <h2>{email}</h2>
        <p>{password}</p>
      </div>
    {/each}
  </section> -->
  
  <style>
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
      height: 30vh;
      width: 30vw;
      text-align: center;
      background-color: #f2f2f2;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    /* Place styles of your view here */
  </style>


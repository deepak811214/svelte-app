<script>
    import { page } from "$app/stores";
  </script>
  
  <section>
    <h1>List of Emails Registered</h1>
    <ol>
      {#each $page.data.users.results as { email, password }}
        <li>
          <div style="font-weight: bold; font-size: 20px">{email}</div>
        </li>
      {/each}
    </ol>
  </section>
  
  <style>
    /* Place styles of your view here */
  </style>


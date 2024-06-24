<script lang="ts">
  import "../app.css";
  import { admin } from "../stores.ts";
  import { onDestroy } from "svelte";

  let adminStore: boolean;
  const unsubscribe = admin.subscribe((value) => (adminStore = value));

  let username: string;
  let password: string;
  let usernameLabel: HTMLElement | null;
  let passwordLabel: HTMLElement | null;

  async function login() {
    //check if fields are complete
    if (!username || !password) {
      if (!username) {
        usernameLabel = document.getElementById("username-label");
        usernameLabel?.classList.add("input-error");
      }
      if (!password) {
        passwordLabel = document.getElementById("password-label");
        passwordLabel?.classList.add("input-error");
      }
      return;
    }

    //send login request to server
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const result = await response.json();
    if (result.admin) {
      console.log("Logged in as admin");
      admin.set(true);

      //reset input fields (not sure if this is needed anymore)
      username = "";
      password = "";

      loginModal.close();
    } else {
      //TODO add more error handling
      console.log("Login failed");
    }
  }

  function resetInputColors() {
    if (username) {
      if (usernameLabel == null)
        usernameLabel = document.getElementById("username-label");
      usernameLabel?.classList.remove("input-error");
    }
    if (password) {
      if (passwordLabel == null)
        passwordLabel = document.getElementById("password-label");
      passwordLabel?.classList.remove("input-error");
    }
  }

  function logout() {
    console.log("Logging out");
    admin.set(false);
  }

  onDestroy(unsubscribe);
</script>

<div class="navbar bg-success-content mb-10">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          /></svg
        >
      </div>
      <ul
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-success-content rounded-box w-52"
      >
        {#if adminStore == true}
          <li><a href="/dashboard">Dashboard</a></li>
        {/if}
        <li>
          {#if adminStore == false}
            <button on:click={() => loginModal.showModal()}>Login</button>
          {:else}
            <button on:click={logout}>Logout</button>
          {/if}
        </li>
      </ul>
    </div>
  </div>
  <div class="navbar-center">
    <a href="/" class="btn btn-ghost text-xl">Comandă atestate</a>
  </div>
  <div class="navbar-end">
    {#if adminStore == true}
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            /></svg
          >
          <span class="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
    {/if}
  </div>
</div>
<div class="mx-32">
  <slot></slot>
</div>
<dialog id="loginModal" class="modal">
  <div class="modal-box">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >✕</button
      >
    </form>
    <h3 class="text-lg font-bold">Login:</h3>
    <div class="flex flex-col items-center">
      <label
        id="username-label"
        class="input input-bordered flex items-center gap-2 my-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="h-4 w-4 opacity-70"
        >
          <path
            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
          />
        </svg>
        <input
          on:change={resetInputColors}
          bind:value={username}
          type="text"
          class="grow"
          id="username"
          placeholder="Username"
        />
      </label>
      <label
        id="password-label"
        class="input input-bordered flex items-center gap-2 my-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="h-4 w-4 opacity-70"
        >
          <path
            fill-rule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clip-rule="evenodd"
          />
        </svg>
        <input
          on:change={resetInputColors}
          bind:value={password}
          id="password"
          type="password"
          class="grow"
          placeholder="xxxx"
        />
      </label>
      <button
        on:click={login}
        class="btn btn-outline btn-primary mt-2 min-h-5 h-10 px-5 text-base"
        >Login</button
      >
    </div>
  </div>
</dialog>

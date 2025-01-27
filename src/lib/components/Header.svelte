<script lang="ts">
  let { name } = $props();
  </script>

<nav class="navbar default-margin">
  <a href="/" class="logo">{name}</a>
  <div class="navbar-links">
    <a href="/#about-me" class="nav-link">Om meg</a>
    <a href="/#experience" class="nav-link">Arbeidserfaring</a>
    <a href="/#my-work" class="nav-link">Prosjekter</a>
    
  </div>
</nav>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }

  .logo {
    font-size: 35px;
    font-weight: bold;
    font-family: "text me one";
  }

  .navbar-links {
    display: flex;
    align-items: center;
    gap: 60px;
  }

  .nav-link:hover {
    text-decoration: underline;
  }
</style>
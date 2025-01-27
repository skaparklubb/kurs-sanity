<script lang="ts">
  let { name } = $props();
  </script>

<nav class="navbar default-margin">
  <a href="/" class="logo text-primary">{name}</a>
  <div class="navbar-links">
    <a href="/#about-me" class="nav-link">Om meg</a>
    <a href="/#experience" class="nav-link">Arbeidserfaring</a>
    <a href="/#my-work" class="nav-link">Prosjekter</a>
    
  </div>
</nav>

<style>

  a {
    text-decoration: none;
    font-family: 'Inter';

  }
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
    color: var(--color-secondary);
    text-transform: uppercase ;
    font-weight: 300;
    align-items: center;
    gap: 60px;
  }

  .nav-link:hover {
    text-decoration: underline;
  }
</style>
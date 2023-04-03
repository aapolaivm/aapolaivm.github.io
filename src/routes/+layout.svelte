<script>
    import '../app.css'
    import { base } from "$app/paths";
</script>

<nav>
    <a prefetch href="{base}/">Etusivu</a>
    <a prefetch href="{base}/lex">Säännöskirjasto</a>
    <a prefetch href="{base}/lex2.0">Säännöskirjasto 2.0</a>
    <a prefetch href="{base}/info">Tietoja meistä</a>
    <a prefetch href="{base}/blog">Blog</a>
</nav>

<slot />



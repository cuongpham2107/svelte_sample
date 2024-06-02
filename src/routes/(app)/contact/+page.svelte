<script>
    let a = 0;
    function incrementCount(){
        a++
    }
</script>
<button on:click={incrementCount}>Clcik</button>
<h1>{a}</h1>
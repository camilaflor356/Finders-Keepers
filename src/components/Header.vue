<script>

</script>


<template>
    <div class="header-topbar">
        <div class="header-links">
            <br>
            <RouterLink id=homelink to="/">Home</RouterLink>
            <RouterLink id=finderskeeperslink to="/finderskeepers">FindersKeepers</RouterLink>
            <RouterView/>
        </div>
    </div>
</template>


<style>
.header-topbar {
    font-family: 'Courier New', Courier, monospace;
    background-color: #A3A380;
    font-size:20px;
    text-decoration: none;
}

#homelink{
    background-color:#D6CE93;
    color: black;
    padding:47.5px;
    padding-left: 75px;
    padding-right: 75px;
    margin-left:31%;
    text-decoration: none;
}
#finderskeeperslink{
    background-color: #D6CE93;
    color: black;
    padding:47.5px;
    margin-left: 10%;
    text-decoration: none;
}

#homelink:hover{
    background:#D8A48F;
    text-decoration: #BB8588 wavy underline;
}

#finderskeeperslink:hover{
    background-color:#D8A48F;
    text-decoration: #BB8588 wavy underline;
}

</style>
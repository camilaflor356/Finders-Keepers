<script>

</script>


<template>
    <div class="header-topbar">
        <input type="text" placeholder="Search" value="">
        <div class="header-links">
            <!-- 5. change all href sources to start with /#/. You will have to do it for dropdown as well. -->
            <RouterLink to="/">Go to Home</RouterLink>
            <RouterLink to="/finderskeepers">Go to FindersKeepers</RouterLink>
            <RouterView/>
        </div>
    </div>
</template>


<style>
RouterLink{
    font-size: 20pt;
}
</style>
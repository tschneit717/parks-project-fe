<script>

    /** @type {string} */
    export let title;    
    
    /** @type {string} */
    export let subtitle; 

    /** @type {string} */
    export let image;    
  </script>
  
  <section class="flex flex-col justify-center items-center w-full min-h-screen relative z-0">
    <div class="relative flex flex-col justify-center items-center gap-4 min-w-[200px] min-h-[200px] before:backdrop-blur-sm before:bg-light before:bg-opacity-40 before:absolute before:w-full before:h-full before:block before:left-0 before:z-10 before:rounded-2xl">
        <div class="z-10 text-center relative">
            <h2 class="text-primary text-4xl">{title}</h2>
            <p class="text-dark text-xl">{subtitle}</p>
        </div>
        <slot></slot>
    </div>
    <img src={image} alt="" class="absolute bottom-0 left-0 w-full h-full object-cover"/>
  </section>
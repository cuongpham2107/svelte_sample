<script lang="ts">
    import * as Menubar from "$lib/components/ui/menubar";
    const menus = [
      {
        title : "Home",
        url: "/",
        children: [
        ]
      },
      {
        title : "About",
        url: "/about",
        children: [
          {
            title: "About us",
            url: "/"
          }
        ]
      },
      {
        title : "Home",
        url: "/",
        children: [
          {
            title: "New Window",
            url: "/"
          }
        ]
      },
      {
        title : "Home",
        url: "/",
        children: [
          {
            title: "New Window",
            url: "/"
          }
        ]
      },
      {
        title : "Home",
        url: "/",
        children: [
          {
            title: "New Window",
            url: "/"
          }
        ]
      }
    ]
  </script>
   
  <Menubar.Root>
    {#each menus as menu}
      <Menubar.Menu>
        <Menubar.Trigger>
          <a href={menu.url}> {menu.title}</a>
            {#if menu.children.length > 0}
              <Menubar.Content>
                {#each menu.children as children}
                  <Menubar.Item>{children.title}</Menubar.Item>
                {/each}
                
              </Menubar.Content>
            {/if}
        </Menubar.Trigger>
      </Menubar.Menu>
    {/each}
  </Menubar.Root>
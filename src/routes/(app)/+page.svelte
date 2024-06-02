<script lang="ts">
    import type { PageData } from './$types';
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import FormBuy from "$lib/components/uniswap/form-buy.svelte";
    import FormSell from "$lib/components/uniswap/form-sell.svelte";
      import SettingWallet from "$lib/components/uniswap/setting-wallet.svelte";
    
    export let data: PageData;
</script>


  <div class="container p-8">
    <div class="flex flex-col items-center justify-center">
      <main>
        {#if data.user}
          <p>Welcome, {data.user.email}, role: {data.user.role}</p>
          <div class="button-container">
         
            <form action="/logout" method="POST">
              <button class="btn btn-primary">Logout</button>
            </form>
            {#if data.user.role === 'ADMIN'}
              <a href="/admin/dashboard" class="btn btn-secondary">ADMIN</a>
              
            {/if}
          </div>
      {/if}
        
      </main>
      <SettingWallet  />
  
      <Tabs.Root value="buy" class="w-[600px] pt-4">
        <Tabs.List class="grid w-full grid-cols-2">
          <Tabs.Trigger value="buy">Buy</Tabs.Trigger>
          <Tabs.Trigger value="sell">Sell</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="buy">
          <FormBuy />
        </Tabs.Content>
        <Tabs.Content value="sell">
          <FormSell />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  </div>
  
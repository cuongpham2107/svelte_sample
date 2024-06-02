
<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import WarningIcon from "$lib/components/ui/icons/warning.svelte";
    export let form: any = {};
  </script>
  <form  method="POST" action="?/login">
  <div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
    <div class="hidden bg-muted lg:block">
        <img
          src="https://www.shadcn-svelte.com/images/placeholder.svg"
          alt="placeholder"
          width="1920"
          height="1080"
          class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    <div class="flex items-center justify-center py-12">
      <div class="mx-auto grid w-[350px] gap-6">
        <div class="grid gap-2 text-center">
          <h1 class="text-4xl font-bold">Login</h1>
          <p class="text-balance text-sm text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <div>
          {#if form?.errors?.message}
          <div class="flex flex-row items-center space-x-2 border border-red-400 p-3 rounded-md">
            <WarningIcon className="fill-red-400" />
            <p class="text-red-400 text-sm ">{form?.errors?.message}</p>
          </div>
            
          {/if}
        </div>
        <div class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input 
            class={form?.errors?.email ? 'border-red-400 text-red-400 placeholder:text-red-400' : ''}
            id="email" 
            type="email" 
            name="email" 
            placeholder="m@example.com" 
            value={form?.data?.email ?? ''}
            required />
            {#if form?.errors?.email}   
                <p class="text-sm text-red-400" >{form?.errors?.email[0]}</p>
            {/if}
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password">Password</Label>
              <a href="##" class="ml-auto inline-block text-sm underline">
                Forgot your password?
              </a>
            </div>
            <Input 
            class={form?.errors?.password ? 'border-red-400 text-red-400 placeholder:text-red-400' : ''}
            id="password" 
            type="password" 
            name="password" 
            placeholder="*******" 
            value={form?.data?.password ?? ''}
            required />
            {#if form?.errors?.password}
                <p class="text-sm  text-red-400">{form?.errors?.password[0]}</p>
            {/if}
          </div>
          <Button type="submit" class="w-full">Login</Button>
          <Button variant="outline" class="w-full">Login with Google</Button>
        </div>
        <div class="mt-4 text-center text-sm">
          Don&apos;t have an account?
          <a href="/register" class="underline"> Sign up </a>
        </div>
      </div>
    </div>
   
  </div>
</form>
  


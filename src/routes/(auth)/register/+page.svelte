
<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";

    export let form: any = {};
 
  </script>
  <form  method="POST" action="?/login">
  <div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
    
    <div class="flex items-center justify-center py-12">
      <div class="mx-auto grid w-[350px] gap-6">
        <div class="grid gap-2 text-center">
          <h1 class="text-4xl font-bold">Register</h1>
          <p class="text-balance text-sm text-muted-foreground">
            Enter your email below to register to your account
          </p>
        </div>
        <div class="grid gap-4">
            <div class="grid grid-cols-2 gap-4">
                <div class="grid gap-2">
                  <Label for="first-name">First name</Label>
                  <Input id="first-name" type="text" placeholder="First Name"  required />
                </div>
                <div class="grid gap-2">
                  <Label for="last-name">Last name</Label>
                  <Input id="last-name" type="text" placeholder="Last Name" required />
                </div>
                <Input id="full-name" type="hidden" value="" />
              </div>
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
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="passwordConfirm">Confirm Password</Label>
            </div>
            <Input 
            class={form?.errors?.passwordConfirm ? 'border-red-400 text-red-400 placeholder:text-red-400' : ''}
            id="passwordConfirm" 
            type="password" 
            name="passwordConfirm" 
            placeholder="*******" 
            value={form?.data?.passwordConfirm ?? ''}
            required />
            {#if form?.errors?.passwordConfirm}
                <p class="text-sm  text-red-400">{form?.errors?.passwordConfirm[0]}</p>
            {/if}
          </div>
          <Button type="submit" class="w-full">Register</Button>
          <Button variant="outline" class="w-full">Login with Google</Button>
        </div>
        <div class="mt-4 text-center text-sm">
          Don&apos;t have an account?
          <a href="/login" class="underline"> Sign in </a>
        </div>
      </div>
    </div>
    <div class="hidden bg-muted lg:block">
        <img
          src="https://www.shadcn-svelte.com/images/placeholder.svg"
          alt="placeholder"
          width="1920"
          height="1080"
          class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
  </div>
</form>
  


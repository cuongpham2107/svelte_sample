<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
</script>

  <Card.Root class="w-[600px]">
    <Card.Header>
      <Card.Title>Wallet</Card.Title>
      <Card.Description>
        Change your wallet settings here.
      </Card.Description>
    </Card.Header>
    <Card.Content class="space-y-2">
      <div class="space-x-1">
        <Label class="text-md font-semibold text-blue-500" for="name">Name:</Label>
        <span>askdaklsdlkasndklanslkdnasl</span>
      </div>
      <div class="space-x-1">
        <Label class="text-md font-semibold text-blue-500" for="username">Username</Label>
        <span>askdaklsdlkasndklanslkdnasl</span>
      </div>
    </Card.Content>
    <Card.Footer>
      <Button>Save changes</Button>
    </Card.Footer>
  </Card.Root>
<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
</script>

<Card.Root>
    <Card.Header>
      <Card.Title>Account</Card.Title>
      <Card.Description>
        Make changes to your account here. Click save when you're done.
      </Card.Description>
    </Card.Header>
    <Card.Content class="space-y-2">
      <div class="space-y-1">
        <Label for="name">Name</Label>
        <Input id="name" value="Pedro Duarte" />
      </div>
      <div class="space-y-1">
        <Label for="username">Username</Label>
        <Input id="username" value="@peduarte" />
      </div>
    </Card.Content>
    <Card.Footer>
      <Button>Save changes</Button>
    </Card.Footer>
  </Card.Root>
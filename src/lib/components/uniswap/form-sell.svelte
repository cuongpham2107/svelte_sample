<script lang="ts">
    import * as Card from "$lib/components/ui/card/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
</script>

<Card.Root>
    <Card.Header>
      <Card.Title>Password</Card.Title>
      <Card.Description>
        Change your password here. After saving, you'll be logged out.
      </Card.Description>
    </Card.Header>
    <Card.Content class="space-y-2">
      <div class="space-y-1">
        <Label for="current">Current password</Label>
        <Input id="current" type="password" />
      </div>
      <div class="space-y-1">
        <Label for="new">New password</Label>
        <Input id="new" type="password" />
      </div>
    </Card.Content>
    <Card.Footer>
      <Button>Save password</Button>
    </Card.Footer>
  </Card.Root>
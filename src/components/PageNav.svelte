<script>
  import NavLink from "./NavLink.svelte";
</script>

<aside class="bg-gray-100 m-4 p-4 rounded-xl flex flex-col gap-4">
  <NavLink path="/" icon="home" />
  <hr class="border-gray-400" />
  <NavLink path="/mailboxes" icon="inboxes" />
  <NavLink path="/flows" icon="flow" />
  <NavLink path="/users" icon="users" />
  <NavLink path="/settings" icon="settings" />
  <hr class="border-gray-400" />
  <NavLink path="/logout" icon="logout" />
</aside>
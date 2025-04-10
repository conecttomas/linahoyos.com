export default defineNuxtRouteMiddleware((to, from) => {
  const store = useMainStore();

  if (to.query.type !== undefined) {
    store.setType(to.query.type);

    const queryStirng = { ...to.query };
    delete queryStirng.type;
    useRouter().push({ query: queryStirng });
  }
});

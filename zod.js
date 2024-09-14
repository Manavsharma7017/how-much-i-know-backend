const z=require("zod");

function vaild(thing){
    const s=z.object({
        email:z.string().email(),
        passward:z.string().min(9)
    });
    const r=s.safeParse(thing);
    console.log(r);
}
obj={
    email:"gnjdshgahoi@gaio.com",
    passward:"234567345"
}
vaild(obj);
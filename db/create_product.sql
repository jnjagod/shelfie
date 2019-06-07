insert into products (imageurl, name, price)
values (${imageUrl}, ${name}, ${price});

select * from products
order by id asc;
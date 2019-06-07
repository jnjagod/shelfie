update products
set imageurl = ${imageUrl}, name = ${name}, price = ${price}
where id = $1;

select * from products
order by id asc;
SELECT 
 MONTHNAME(BORROW_DATE) AS BULAN,
 COUNT(*) AS JUMLAH_TRANSAKSI
FROM 
 BORROW_TRANSACTION
GROUP BY 
 MONTHNAME(BORROW_DATE)
ORDER BY 
 MONTH(BORROW_DATE);
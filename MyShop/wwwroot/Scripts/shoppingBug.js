< !DOCTYPE html >
    <html>
        <head>
            <meta charset="utf-8" />
            <title></title>
            <link href="../Style/shoppingBag.css" rel="stylesheet" />
            <script src="../Scripts/"></script>
            <template id="temp-row">
                <tr class="item-row">
                    <td class="imageColumn"><a rel="lightbox" href="#"><div class="image"></div></a></td>
                    <td class="descriptionColumn"><div><h3 class="itemName"></h3><h6><p class="itemNumber"></p><a class="viewLink" href="https://www.next.co.il/he/g59522s11#407223">������ ������</a></h6></div></td>
                    <td class="availabilityColumn"><div>�����</div></td>
                    <td class="totalColumn delete"><div class="expandoHeight" style="height: 99px;"><p class="price"></p><a href="#" title="���� ��� ��� ����� �� ���� ��" class="Hide DeleteButton showText">���� ����</a></div></td>
                </tr>
            </template>
        </head>
        <body>
            <div class="cart">
                <div id="title">
                    <h1> �� ����� </h1>
                    <p>
                        ��� ��� ���� <span id="itemCount"></span> ������ ����� ��� �� <span id="totalAmount"></span>.
                    </p>
                    <a class="nxbtn primary GoToCheckout TopLink checkout_transfer" href="#" onclick="placeOrder(); return false;">������ ������</a> <a class="shopmore" href="Products.html?fromShoppingBag=1">���� �����</a> <div class="ClearBoth"></div>
                </div>
                <div class="cistGroup">
                    <table id="items" class="items">
                        <thead>
                            <tr>
                                <th class="itemsColumn" colspan="2">������</th>
                                <th>������</th>
                                <th class="totalColumn">���� ������</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </body>
    </html>
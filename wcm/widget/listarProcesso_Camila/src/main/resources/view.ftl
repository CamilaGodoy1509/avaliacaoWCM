<div id="MyDataTable_${instanceId}" class="super-widget wcm-widget-class fluig-style-guide"
	data-params="MyDataTable.instance()">

	
    <h1>Lista de Usuários - Fluig</h1>

	<div class="bs-example">
		<div class="row">
			<div class="col-md-12 scrooltable" id="target" data-isolated-scroll>

				<script type="text/template" class="mydatatable-template-row-area-buttons">
					<div id="datatable-area" class="panel-heading">
						<div class="row">
							<div id="datatable-area-action" class="col-md-9">
								<button class="btn btn-primary" data-datatable-del-row>Remover
								</button>
                                <button class="btn btn-primary" data-datatable-reload>Atualizar
								</button>
								<div class="btn-group">
									<button type="button" class="btn btn-primary dropdown-toggle"
										data-toggle="dropdown" aria-expanded="false">
										Mais
										<span class="caret"></span>
									</button>
									<ul class="dropdown-menu" role="menu">
										<li>
											<a data-datatable-show-column1 href="#">Mostrar Coluna Id</a>
										</li>
										<li>
											<a data-datatable-hide-column1 href="#">Esconder Coluna Id</a>
										</li>
                                        <li>
											<a data-datatable-show-column2 href="#">Mostrar Coluna Nome</a>
										</li>
                                       <li>
											<a data-datatable-hide-column2 href="#">Esconder Coluna Nome</a>
										</li>
                                        <li>
											<a data-datatable-show-column3 href="#">Mostrar Coluna E-mail</a>
										</li>
                                       <li>
											<a data-datatable-hide-column3 href="#">Esconder Coluna E-mail</a>
										</li>
                                        
									</ul>
								</div>
							</div>
						</div>
					</div>
				</script>

				<div id="idtable_${instanceId}"></div>



			</div>
		</div>
	</div>

    <script src="/webdesk/vcXMLRPC.js"></script>
</div>

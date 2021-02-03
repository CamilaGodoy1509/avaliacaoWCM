<#import "/wcm.ftl" as wcm />
<@wcm.header authenticated="true" />
<!-- WCM Wrapper content -->
<div class="wcm-wrapper-content">

	<@wcm.menu />

	<!-- Wrapper -->
	<div class="wcm-all-content">
		<div id="wcm-content" class="clearfix wcm-background">

			<!-- Your content here -->

			<body>

				<div class="fluig-style-guide">
					<div class="jumbotron">
						<center>
						<h1>Página - Camila Lima</h1>
						<p>Página para avaliação de Matriz de Conhecimento.</p>
						</center>
					</div>

					<div class="row">
						<div class="col-xs-12 col-lg-12">
							<div class="editable-slot slotfull layout-1-1" id="slotContainer001">
								<@wcm.renderSlot id="Slot002" decorator="false" editableSlot="true" />
							</div>
						</div>
					</div>








				</div>
			</body>

			<@wcm.footer layoutuserlabel="wcm.layoutdefault.user" />
		</div>
	</div>
</div>